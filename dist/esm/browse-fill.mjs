export const name="browse-fill";
export const id="dl_ef4934f69ecd98b11950";
export const url=new URL("../icons/browse-fill.svg?v=17c20d285f59c9a0ff2574871df58e5a9d1b4ce3fe47683cd7eb5428d9415432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
