export const name="movie_speaker";
export const id="dl_464c2eeb5f384f55bc26";
export const url=new URL("../icons/movie_speaker.svg?v=e2ba23258e9e9fc2b22f397091cfa90a40ba570b80f1b84ad71466bb975e2d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
