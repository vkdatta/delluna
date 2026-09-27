export const name="ink_highlighter_move-fill";
export const id="dl_144e433547841aee0181";
export const url=new URL("../icons/ink_highlighter_move-fill.svg?v=377e8eb72cfc0e0e03e0c4992d659570532f849522495c6ff1ac988d8b2807e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
