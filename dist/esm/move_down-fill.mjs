export const name="move_down-fill";
export const id="dl_c8ac3f6eebfed65f600e";
export const url=new URL("../icons/move_down-fill.svg?v=3ba55d47b7d02692347b57825ba2eb00efcc41608b00ef514a0c72efccd18e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
