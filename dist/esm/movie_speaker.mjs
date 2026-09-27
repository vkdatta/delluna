export const name="movie_speaker";
export const id="dl_d6910c739618f380466e";
export const url=new URL("../icons/movie_speaker.svg?v=0b7c88eabfa6de654b06e5f33689acd7416d47049184ae3986e6745d547d5251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
