export const name="lucid_2-credit-card-reader";
export const id="dl_1bab677e329049e9bfa1";
export const url=new URL("../icons/lucid_2-credit-card-reader.svg?v=2ce6c72079719af64b2f7d7b70135f9594263adf3d5a12b63792532d9314ef52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
