export const name="lucid_3-scissors-line-dashed";
export const id="dl_7e8f181dc7d54dac9901";
export const url=new URL("../icons/lucid_3-scissors-line-dashed.svg?v=75c86246c09ed4fec86a682849181da3aad94f19ebe8c3d69a6e2749a9e3174b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
