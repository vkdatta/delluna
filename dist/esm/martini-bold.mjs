export const name="martini-bold";
export const id="dl_d239e2411f3645fc80be";
export const url=new URL("../icons/martini-bold.svg?v=9f24e0c0a13f6b9089daaaf5fba0fd36bf72087d4460b4f688224062a2d322f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
