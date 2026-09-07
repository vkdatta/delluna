export const name="linux-logo-bold";
export const id="dl_ab5a5bf23cd14449a6c9";
export const url=new URL("../icons/linux-logo-bold.svg?v=a8050ba1d5ec664443060e21a66c1859bce6ac4f3e97792599ab7997e8a0216b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
