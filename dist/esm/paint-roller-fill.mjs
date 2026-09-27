export const name="paint-roller-fill";
export const id="dl_bd5672ae4dfc45018a0b";
export const url=new URL("../icons/paint-roller-fill.svg?v=619865a91abe60bdf5aaf1cdb7ddad423b4fc49e580ffb7d12cddaafc7d5c3e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
