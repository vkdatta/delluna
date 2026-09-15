export const name="deblur";
export const id="dl_6c2c625ef7ce4bc2b520";
export const url=new URL("../icons/D/deblur.svg?v=5cb3c6bdb781a2e4aec7f088e3d3960bee16835f81c1bec85977d12c2d833ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
