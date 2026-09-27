export const name="flash_on";
export const id="dl_6ba0bc0ebb68ad808c22";
export const url=new URL("../icons/flash_on.svg?v=1072639780ddd49664ee2de8faec38ca1bec09ceebcfb071a13584c7a5cf200b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
