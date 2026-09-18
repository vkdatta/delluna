export const name="light_mode-fill";
export const id="dl_9bdcca8d52904201951b";
export const url=new URL("../icons/light_mode-fill.svg?v=1235a6afce6097f2358ed561a36800538adf09f7d10ae35f22d49a7a78470400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
