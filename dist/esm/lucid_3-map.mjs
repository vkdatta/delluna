export const name="lucid_3-map";
export const id="dl_630b8e5b1dd14d678e9c";
export const url=new URL("../icons/lucid_3-map.svg?v=1d3836c622627e3189cfd901fb0ef549f1a09e869caa282e33b31d86de9e96a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
