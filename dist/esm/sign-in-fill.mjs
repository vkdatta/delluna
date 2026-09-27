export const name="sign-in-fill";
export const id="dl_6fe341c613e177979c77";
export const url=new URL("../icons/sign-in-fill.svg?v=c24da93f377d4440b2a216e8531eabb2004c3f2b7991377e04fbaf36501d4dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
