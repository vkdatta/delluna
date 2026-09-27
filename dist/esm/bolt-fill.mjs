export const name="bolt-fill";
export const id="dl_f9208081dc5f0c5b1ed2";
export const url=new URL("../icons/bolt-fill.svg?v=d92c541a573263814651c3d2245c91cb76da7c38f7eb199bcce9f1864c8b23be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
