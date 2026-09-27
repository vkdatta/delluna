export const name="movie_speaker";
export const id="dl_19a41546d753d649c5bc";
export const url=new URL("../icons/movie_speaker.svg?v=b8e8d4af9ed60adb0c9d2362594eebd609646817d4954b524a8dfbc08c3c5054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
