export const name="lucid_3-notepad-text";
export const id="dl_a2ce6e3c73434725a77f";
export const url=new URL("../icons/lucid_3-notepad-text.svg?v=a3c16a99b06032a853ed6f4164a5c9a3d1623f47368bf91945751804bd92acbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
