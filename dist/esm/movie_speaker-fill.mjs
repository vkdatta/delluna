export const name="movie_speaker-fill";
export const id="dl_b31dd1f538d936ded2e5";
export const url=new URL("../icons/movie_speaker-fill.svg?v=a33d2330cf34be97ac846c7522c28c18448a717a60a471158c028efef9251101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
