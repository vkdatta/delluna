export const name="lucid_2-folder-input";
export const id="dl_c7ef82ba5f5447488779";
export const url=new URL("../icons/lucid_2-folder-input.svg?v=9057f5f65b661f926d7146d73399002e32de9ee4b66d4a11ad7cb508d3d2e7ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
