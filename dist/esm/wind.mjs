export const name="wind";
export const id="dl_c283c1118a2645a5be75";
export const url=new URL("../icons/wind.svg?v=a9a71d7e5690d64f1ce7d9f729cba82bee54d62f7b10b35b6922455cf59d3b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
