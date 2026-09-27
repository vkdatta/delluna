export const name="hourglass-medium";
export const id="dl_665e67ab74164784b03e";
export const url=new URL("../icons/hourglass-medium.svg?v=beb9d0da5ec99dc14ade5006f7d8ee231324adbb9d7d1dca80abd6e6fb6e28d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
