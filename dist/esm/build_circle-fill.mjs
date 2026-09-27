export const name="build_circle-fill";
export const id="dl_f78bb16c6d4d22d563bd";
export const url=new URL("../icons/build_circle-fill.svg?v=2cd529ad6ab1d71d13f38d613c66caea74896f9f4e0716b6452459d1cc38902f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
