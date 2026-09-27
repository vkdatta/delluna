export const name="touch_triple";
export const id="dl_2651278c737c2964285b";
export const url=new URL("../icons/touch_triple.svg?v=2d15de5b1b57eed1b04cfa950b8d4df0dae703060bac5e70c9febb4515a42c80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
