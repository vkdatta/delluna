export const name="lucid_2-folder-symlink";
export const id="dl_eead05a4013d446aa8f3";
export const url=new URL("../icons/lucid_2-folder-symlink.svg?v=b008f068368d977643e301471c2e65959c5b507747a67181497f0ceaa13803be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
