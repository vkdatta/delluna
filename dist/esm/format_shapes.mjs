export const name="format_shapes";
export const id="dl_c9bd84ec81b2b59d8c77";
export const url=new URL("../icons/format_shapes.svg?v=9fa1e326e66b1a9c8db86b25ee3d1096fcf16d953307e7a83de5a68a7904bc8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
