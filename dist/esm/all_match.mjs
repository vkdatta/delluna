export const name="all_match";
export const id="dl_50eb248ab55febedef77";
export const url=new URL("../icons/all_match.svg?v=afcaf4ef563a6adc9f2ad324c2e6e1e68c0d3fde722995fb35ea069d8132b834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
