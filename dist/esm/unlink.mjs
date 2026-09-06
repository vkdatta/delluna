export const name="unlink";
export const id="dl_c8c37666da3c44e3919f";
export const url=new URL("../icons/unlink.svg?v=528f80afec03aa52f8274f307f6ac4df2d3455268b4f99353cb2e3ef21ab2807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
