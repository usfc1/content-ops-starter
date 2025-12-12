import Head from 'next/head';
import clsx from 'classnames';

const highlights = [
    {
        title: 'Твои 24/7 чаты',
        value: '168',
        accent: '+12%',
        description: 'диалогов не закрывались ни на минуту — это рекорд твоей ночной смены.',
    },
    {
        title: 'Голосовые',
        value: '42 часа',
        accent: '🥇',
        description: 'столько времени ты провёл в разговоре. Пора запускать подкаст?',
    },
    {
        title: 'Реакции',
        value: '11 480',
        accent: '🔥',
        description: 'стикеры, лайки и эмодзи, которыми ты зажигал переписки друзей.',
    },
];

const stories = [
    {
        tag: 'Твои люди',
        title: 'ТОП‑5 собеседников',
        items: ['Алина — 19 420 сообщений', 'Игорь — 14 003 сообщений', 'Мама — 10 291 сообщений', 'Рабочий чат — 8 442 сообщений', 'Сам с собой — 6 120 сообщений'],
    },
    {
        tag: 'Каналы',
        title: 'Подписки, которые держали в тонусе',
        items: ['Daily Tech Pulse', 'Новости тут', 'Фанатский клуб Dune', 'Секретные мемы', 'Беговой клуб на районе'],
    },
    {
        tag: 'Экспрессия',
        title: 'Самые частые стикеры',
        items: ['Бесконечный кек', 'Грустный котик', 'Драматичный реверанс', 'Гифка «лол, что?»', '«Ща буду» с кружочком'],
    },
];

const recapMoments = [
    {
        title: 'Самая громкая неделя',
        metric: 'Неделя 36',
        change: '+73% сообщений',
        note: 'вышел новый сезон сериала и чат взорвался обсуждениями.',
    },
    {
        title: 'Ранний птах',
        metric: '07:24',
        change: 'первое сообщение дня',
        note: 'ты стабильно открываешь Telegram раньше будильника.',
    },
    {
        title: 'Ночной рейд',
        metric: '02:51',
        change: 'самый частый ночной пинг',
        note: '«ты тут?» звучит особенно драматично в это время.',
    },
];

const GradientOrb = ({ size = 'large', className }) => (
    <div
        className={clsx(
            'absolute rounded-full blur-3xl opacity-60 animate-pulse-glow',
            size === 'large' ? 'w-72 h-72' : 'w-48 h-48',
            className
        )}
    />
);

export default function Home() {
    return (
        <>
            <Head>
                <title>Telegram Wrapped 2025</title>
                <meta
                    name="description"
                    content="Твои личные итоги года в Telegram: эмоции, цифры и моменты, которые сделали 2025 незабываемым."
                />
            </Head>
            <main className="relative min-h-screen bg-slate-950 text-slate-50 overflow-hidden">
                <GradientOrb className="-left-24 top-10 bg-cyan-500/40" />
                <GradientOrb size="small" className="right-0 top-32 bg-indigo-500/40" />
                <GradientOrb size="small" className="-bottom-10 left-24 bg-fuchsia-500/40" />

                <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.08),transparent_25%),radial-gradient(circle_at_90%_10%,rgba(167,139,250,0.08),transparent_20%),radial-gradient(circle_at_80%_80%,rgba(244,114,182,0.06),transparent_25%)]" />

                <section className="relative z-10 px-6 py-16 md:py-24 max-w-6xl mx-auto">
                    <header className="text-center mb-14">
                        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cyan-200">
                            Telegram Wrapped 2025
                        </p>
                        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-50">
                            Твой личный телеграмный <span className="text-cyan-300">космос</span> за 2025 год
                        </h1>
                        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                            Мы собрали эмоции, цифры и самые громкие моменты твоих чатов в один динамичный отчёт. Запускай веб‑приложение и узнавай, какой след ты оставил в переписках.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <button className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500 px-6 py-3 text-lg font-semibold text-slate-950 shadow-[0_10px_50px_-15px_rgba(56,189,248,0.8)] transition hover:scale-105">
                                Запустить мой Wrapped
                                <span className="absolute inset-0 bg-white/30 opacity-0 hover:opacity-20 transition" />
                            </button>
                            <button className="rounded-2xl border border-slate-700 px-6 py-3 text-lg font-semibold text-slate-200 hover:border-cyan-400 hover:text-cyan-200 transition">
                                Поделиться с друзьями
                            </button>
                        </div>
                    </header>

                    <div className="grid gap-6 md:grid-cols-3 mb-14">
                        {highlights.map((item) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                                <div className="flex items-center justify-between">
                                    <p className="text-sm uppercase tracking-widest text-slate-300">{item.title}</p>
                                    <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold text-cyan-100">
                                        {item.accent}
                                    </span>
                                </div>
                                <p className="mt-4 text-4xl font-bold text-slate-50">{item.value}</p>
                                <p className="mt-3 text-slate-300">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-stretch">
                        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 p-8 backdrop-blur-xl">
                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />
                            <div className="absolute -left-6 bottom-10 h-24 w-24 rounded-full border border-cyan-300/20" />
                            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-slate-100">
                                Истории года
                            </p>
                            <h2 className="mt-4 text-3xl font-bold text-slate-50">Твои ритуалы в Telegram</h2>
                            <p className="mt-2 text-slate-200 max-w-3xl">
                                Алгоритм прошёлся по твоим чатикам и достал моменты, которые создали атмосферу года. Не просто цифры, а эмоции, люди и мемы, что держали тебя на плаву.
                            </p>

                            <div className="mt-8 grid gap-4 md:grid-cols-2">
                                {recapMoments.map((moment) => (
                                    <div key={moment.title} className="rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur">
                                        <p className="text-sm uppercase tracking-widest text-cyan-200">{moment.title}</p>
                                        <p className="mt-2 text-2xl font-bold text-slate-50">{moment.metric}</p>
                                        <p className="text-sm text-cyan-200">{moment.change}</p>
                                        <p className="mt-3 text-slate-200">{moment.note}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(129,140,248,0.15),transparent_30%)]" />
                            <div className="relative">
                                <p className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-widest text-cyan-100">
                                    Эффект присутствия
                                </p>
                                <h3 className="mt-4 text-2xl font-bold text-slate-50">Интерактивный Telegram Wrapped</h3>
                                <p className="mt-2 text-slate-200">
                                    Веб‑приложение будто открывает твой чат в космосе: анимированные карточки пролистывают недели, кружочки подсвечивают эмоции, а кнопки ведут к самым ярким моментам года.
                                </p>
                                <ul className="mt-5 space-y-3 text-slate-200">
                                    <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />Свайпай «Истории», чтобы листать недели и сравнивать настроение.</li>
                                    <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" />Нажми «Поделиться», чтобы получить динамичную открытку для друзей.</li>
                                    <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-300" />Включи «Вибрации» — кнопки отвечают лёгким откликом при каждом инсайте.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="relative z-10 mt-14 grid gap-6 md:grid-cols-3">
                        {stories.map((story) => (
                            <div
                                key={story.title}
                                className="group overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-xl"
                            >
                                <p className="text-xs uppercase tracking-widest text-cyan-200">{story.tag}</p>
                                <h3 className="mt-3 text-2xl font-bold text-slate-50">{story.title}</h3>
                                <ul className="mt-4 space-y-2 text-slate-200">
                                    {story.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-5 flex items-center gap-2 text-sm text-cyan-100 opacity-0 group-hover:opacity-100 transition">
                                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 animate-ping" />
                                    Откроется как отдельная история с анимацией свайпа
                                </div>
                            </div>
                        ))}
                    </section>

                    <section className="relative z-10 mt-16 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-8 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.7)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.15),transparent_30%)]" />
                        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Ты готов?</p>
                                <h3 className="mt-3 text-3xl font-bold text-slate-50">Собери свой Telegram Wrapped прямо сейчас</h3>
                                <p className="mt-2 text-slate-200 max-w-2xl">
                                    Веб‑приложение создаёт интерактивные карточки: свайпай, шарь, скачивай и возвращайся к моментам, которые сделали 2025 таким ярким. Всё без загрузок — только чистый vibe.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <button className="rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-lg font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-105">
                                    Открыть веб‑приложение
                                </button>
                                <button className="rounded-2xl border border-cyan-300/50 px-5 py-3 text-lg font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-cyan-50">
                                    Сохранить превью
                                </button>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
}
