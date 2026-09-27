export const name="badge-fill";
export const id="dl_cadfa869538d86282747";
export const url=new URL("../icons/badge-fill.svg?v=5a7520600dbfe6e5c218752fb6b35350c6997c2761c35a727f14d412708259a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
