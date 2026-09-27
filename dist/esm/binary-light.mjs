export const name="binary-light";
export const id="dl_45bab05fbe564c06bbc0";
export const url=new URL("../icons/binary-light.svg?v=f2995f415afb56ad4f40d7434b281ab3d3ba65378aa2396a5403eccbcaff858e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
