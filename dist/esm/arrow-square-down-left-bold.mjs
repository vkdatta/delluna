export const name="arrow-square-down-left-bold";
export const id="dl_6a8b647217794533920a";
export const url=new URL("../icons/arrow-square-down-left-bold.svg?v=a96c6b12c141e1575d5f92703a0bd46e47e69004dc195c3398b799359dae8841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
