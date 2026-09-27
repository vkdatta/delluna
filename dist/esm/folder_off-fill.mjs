export const name="folder_off-fill";
export const id="dl_76534227ec8a76146c92";
export const url=new URL("../icons/folder_off-fill.svg?v=adaf12018e972d10f90f2da7c3804e1a2efb1e34509eed797593893aab692044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
