export const name="arrow-square-out";
export const id="dl_4ea9ba8b9e534e70a1b1";
export const url=new URL("../icons/arrow-square-out.svg?v=dcc2e38abf8b75244af6076e757f16d2f1555a2372087e623e5c5a7a4cf29fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
