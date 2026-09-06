export const name="bell-z-fill";
export const id="dl_d5dc5faf17444d5881ad";
export const url=new URL("../icons/bell-z-fill.svg?v=37365c6c32bd2c1febf920e58a44bf1ff368d02c993161a22b7a6f9691c14e4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
