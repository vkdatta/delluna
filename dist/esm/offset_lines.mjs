export const name="offset_lines";
export const id="dl_ceda1c7b8dd24d2ab211";
export const url=new URL("../icons/offset_lines.svg?v=fe6cbb64cf2de1091e8cf0be1854d2fa5c95fc91d5d8eaafe10925fe83607aa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
