export const name="wifi-none-light";
export const id="dl_3b38516ecc954df3b84b";
export const url=new URL("../icons/W/wifi-none-light.svg?v=bef4e990f98a221f56fd1b6b9befd48fa97333174908541817fe362cea0369d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
