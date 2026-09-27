export const name="disc-fill";
export const id="dl_e03a5ab1744d4407b4a7";
export const url=new URL("../icons/disc-fill.svg?v=cb91bfb69c2279edadff56b603bb452ab5f1f19774c1105571ffcbb2a58e2f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
