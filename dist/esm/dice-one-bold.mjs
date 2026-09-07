export const name="dice-one-bold";
export const id="dl_93047aac7e17434c9664";
export const url=new URL("../icons/dice-one-bold.svg?v=10bdc55dd2b4ae7681ae8fd2c9a7754933051853cacc142d1bb5a94e308b7a8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
