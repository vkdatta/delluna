export const name="subset-proper-of-thin";
export const id="dl_1915e45f5c7520d008cd";
export const url=new URL("../icons/subset-proper-of-thin.svg?v=983306ab849647e062554d8edc6208ab46f2ccda3d609ee7f99dcafc266cead3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
