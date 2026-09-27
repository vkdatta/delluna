export const name="gauge-bold";
export const id="dl_e6d8b2f0b4c040ae8fe6";
export const url=new URL("../icons/gauge-bold.svg?v=2cc0b76fb603cfd6f660fb5537f5f730b4ea92e55354b819ee75a45fa4c6c326",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
