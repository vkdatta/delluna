export const name="caret-double-left-duotone";
export const id="dl_24058f0d4a5947158843";
export const url=new URL("../icons/caret-double-left-duotone.svg?v=838cea0629bc4fac720d171e820ef79ac6213795606fa1b6a1e916794cd50a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
