export const name="arrow-counter-clockwise-light";
export const id="dl_2563cc043f7c48d7b213";
export const url=new URL("../icons/arrow-counter-clockwise-light.svg?v=4fa31829e33a41171f3e5096cd19a9b7f00e4337944dee898f73be59d914ef8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
