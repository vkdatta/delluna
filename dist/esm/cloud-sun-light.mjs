export const name="cloud-sun-light";
export const id="dl_cfcc74886e294260a7ec";
export const url=new URL("../icons/cloud-sun-light.svg?v=94c7545fb6817fdad3f0a69257a7b0ff92ff3292cdf1633f9fd4056f79d97f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
