export const name="vrpano-fill";
export const id="dl_d2b8c43d1966d46c251d";
export const url=new URL("../icons/vrpano-fill.svg?v=7aed5bbb798d12c9b6ced74addba2acc077fcce27df3a251ff01f9231c697179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
