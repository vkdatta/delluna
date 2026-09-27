export const name="mode_dual-fill";
export const id="dl_311ef756f22c586438b5";
export const url=new URL("../icons/mode_dual-fill.svg?v=bbb610c41caa2bc5678e1cc632fb69c250dbd79d0c7958a6b867cd274b854e84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
