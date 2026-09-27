export const name="x-duotone";
export const id="dl_c1e2d2341bf25cc89d4d";
export const url=new URL("../icons/x-duotone.svg?v=7d99a25e35d13ba626ffde74f3ec9df40940bd79797b40017bb65fa3d313e42f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
