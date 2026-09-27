export const name="folder_delete-fill";
export const id="dl_c1c249c839f7421b5623";
export const url=new URL("../icons/folder_delete-fill.svg?v=3d0eed80b3aa64ec121b1cb540eb06460636d2442fec4c893f06dfb276c34cc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
