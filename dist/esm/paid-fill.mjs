export const name="paid-fill";
export const id="dl_f295b877269841098e02";
export const url=new URL("../icons/P/paid-fill.svg?v=11866e13382799412711e30bd25b08289b7c9fe5812d9e70c01c0927bc0dfc6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
