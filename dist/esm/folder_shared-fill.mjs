export const name="folder_shared-fill";
export const id="dl_c2ea2e165c871d0e0f22";
export const url=new URL("../icons/folder_shared-fill.svg?v=09b3b7a8f436569a68302445afe298db67e46c7f35724938f948ff5338d54595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
