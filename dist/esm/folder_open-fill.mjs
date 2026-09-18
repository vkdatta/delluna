export const name="folder_open-fill";
export const id="dl_6d7b0e9b89e64e0eb19a";
export const url=new URL("../icons/folder_open-fill.svg?v=233584f6dc917af4d91e8c87facd79e6336834ae121203a776ad3f88a24db316",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
