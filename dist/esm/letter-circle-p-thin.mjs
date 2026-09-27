export const name="letter-circle-p-thin";
export const id="dl_fad6f457034d43bd8019";
export const url=new URL("../icons/letter-circle-p-thin.svg?v=f3f83295d3f1fab4059a3e32842bd6ccb3bfaa05833bc8d9be8c8e0546322f92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
