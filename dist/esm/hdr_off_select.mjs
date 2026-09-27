export const name="hdr_off_select";
export const id="dl_522cfda17308810aa8fb";
export const url=new URL("../icons/hdr_off_select.svg?v=ba78a002abd3d9a98447f9dc9bc82e335330fdac48ccbd703e666eaf604ce069",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
