export const name="lucid_3-pencil-sparkles";
export const id="dl_5e609697054c4f2b857b";
export const url=new URL("../icons/lucid_3-pencil-sparkles.svg?v=f344facc0671bb28c6067cf3537e5cdac70e382f7848537f9309c9fa29fc433a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
