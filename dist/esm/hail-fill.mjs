export const name="hail-fill";
export const id="dl_85e0566caa1c4405abaa";
export const url=new URL("../icons/hail-fill.svg?v=d9c068b646612dd7ff19fed8f2a26ec7442034f4322adaf064fb8e92cedfe356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
