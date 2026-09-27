export const name="arrow-bend-right-down-fill";
export const id="dl_15c2b24868f74967bae6";
export const url=new URL("../icons/arrow-bend-right-down-fill.svg?v=1ef0b4bd949a8df2228b225c7b5f0c9a6296b8b0f5d263dc2936ccc636de28f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
