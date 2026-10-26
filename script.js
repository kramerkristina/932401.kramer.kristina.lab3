const userName = prompt("Как вас зовут?", "Кристина");
const displayName = userName && userName.trim() !== "" ? userName.trim() : "Киноман";
alert(`Привет, ${displayName}! Добро пожаловать на страницу любителя кино и сериалов.`);

const movieDurations = [25, 142, 38, 195, 110, 155, 18];
console.log("Исходный список длительностей фильмов (мин):", movieDurations);

function getMaxDuration(durations) {
    if (durations.length === 0) return 0;
    let max = durations[0];
    for (let i = 1; i < durations.length; i++) {
        if (durations[i] > max) {
            max = durations[i];
        }
    }
    return max;
}

function filterFeatureFilms(durations, minDuration = 120) {
    const filtered = [];
    for (let i = 0; i < durations.length; i++) {
        if (durations[i] > minDuration) {
            filtered.push(durations[i]);
        }
    }
    return filtered;
}

function calculateTotalDuration(durations) {
    let sum = 0;
    for (let i = 0; i < durations.length; i++) {
        sum += durations[i];
    }
    return sum;
}

function analyzeShortFilms(durations, maxShortDuration = 40) {
    let count = 0;
    let totalShortDuration = 0;

    for (let i = 0; i < durations.length; i++) {
        if (durations[i] <= maxShortDuration) {
            count++;
            totalShortDuration += durations[i];
        }
    }

    return { count, totalShortDuration };
}

const totalWatchTime = calculateTotalDuration(movieDurations);
const featureFilms = filterFeatureFilms(movieDurations, 120);
const featureFilmsTime = calculateTotalDuration(featureFilms);

alert(
    `Общая длительность просмотра – ${totalWatchTime} минут, из них ${featureFilmsTime} минут – полнометражные фильмы`
);

const shortFilmsStats = analyzeShortFilms(movieDurations, 40);
console.log(
    `Короткометражки (≤ 40 мин): количество – ${shortFilmsStats.count} шт., суммарная длительность – ${shortFilmsStats.totalShortDuration} минут.`
);

const maxMovieDuration = getMaxDuration(movieDurations);
console.log(`Максимальная длительность фильма в списке: ${maxMovieDuration} минут.`);

if (maxMovieDuration >= 180) {
    console.log("Это почти как полноценный театральный спектакль!");
}