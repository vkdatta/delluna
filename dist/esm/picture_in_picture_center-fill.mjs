export const name="picture_in_picture_center-fill";
export const id="dl_7a360982ca4c412da430";
export const url=new URL("../icons/P/picture_in_picture_center-fill.svg?v=da5989d7a5f6083fb2b70ff577ed4f81181be4f82bf804ee2ef174ceec7e888d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
