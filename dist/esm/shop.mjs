export const name="shop";
export const id="dl_139d7746a5194ec092be";
export const url=new URL("../icons/S/shop.svg?v=395b2df7b0272c2360d3c82782a3a657bf83044a7597371b6e1e9dcf730ad1a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
