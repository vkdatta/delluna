export const name="yin-yang-duotone";
export const id="dl_c6204807394f489fbc80";
export const url=new URL("../icons/Y/yin-yang-duotone.svg?v=d23c1f16d3eda03363d4b419b0b596f425c8887ce8911a09e282bf7a1dd74227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
