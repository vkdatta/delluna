export const name="doorbell-fill";
export const id="dl_0bd0205478708aa9a60a";
export const url=new URL("../icons/doorbell-fill.svg?v=a93bd610c52c10851fec0dad28575430fbd35239eff516aea135bb7f41bad41e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
