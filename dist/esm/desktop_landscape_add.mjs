export const name="desktop_landscape_add";
export const id="dl_d4dbb65e47e64c6eae2f";
export const url=new URL("../icons/desktop_landscape_add.svg?v=5b615c91b8ccd825879f79f414d1d7fcead4efd2c4c21186445ead01033bf160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
