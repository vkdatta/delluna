export const name="home_max_dots";
export const id="dl_5eac4f2f1a5d0dcf478d";
export const url=new URL("../icons/home_max_dots.svg?v=15d450236ef8441469c865f5401bc5d22acca096e11f3bf8b376437762665553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
