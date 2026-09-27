export const name="lucid_3-monitor-dot";
export const id="dl_56f2cb4a11c944d880ee";
export const url=new URL("../icons/lucid_3-monitor-dot.svg?v=6023432cde9c8084479df9303c2f3aafa9a564c5d681e898a3d1a5fa29686215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
