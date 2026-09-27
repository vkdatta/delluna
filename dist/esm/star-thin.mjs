export const name="star-thin";
export const id="dl_c3388d01e14154c2800d";
export const url=new URL("../icons/star-thin.svg?v=5527925fb76dcf4fc0389d0477a099f38eb9d1f171e469bdf2d96183ab8b7374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
