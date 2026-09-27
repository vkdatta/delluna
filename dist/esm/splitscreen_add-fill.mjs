export const name="splitscreen_add-fill";
export const id="dl_f5b8c4f1da1920ca22cf";
export const url=new URL("../icons/splitscreen_add-fill.svg?v=0605bdf6a3ba625f710912e9d1a593144b8eef4f53457d57e18b20d41ae266c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
