export const name="outbound";
export const id="dl_4c3b306af38ab6a0cd84";
export const url=new URL("../icons/outbound.svg?v=a9d3256dbb1d1e38e15a746ab80bdef8e0fce8ee51ea9a65d62abb7317aef69a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
