export const name="lucid_2-file-input";
export const id="dl_a07820a6ec3947cf9838";
export const url=new URL("../icons/lucid_2-file-input.svg?v=f7fbc429d09f490c9e4ef901987892ce6ba9823e8945f6554a87c83ec78f349b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
