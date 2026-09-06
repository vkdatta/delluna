export const name="lucid_3-signpost";
export const id="dl_c61a0d4015a64f2b8015";
export const url=new URL("../icons/lucid_3-signpost.svg?v=f98228d9208dd12ece60cb7930f4fb6d8b15f1d9432883bbfafaca6fee3fe2ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
