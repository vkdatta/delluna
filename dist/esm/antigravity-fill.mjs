export const name="antigravity-fill";
export const id="dl_3ef456550e8444489289";
export const url=new URL("../icons/antigravity-fill.svg?v=18baa105229f49363d6b46b16d78a708bba74766400467e556612e8c97948f88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
