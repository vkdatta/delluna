export const name="road-fill";
export const id="dl_4c79bc820766d0e1577f";
export const url=new URL("../icons/road-fill.svg?v=2ee66c075e29a71e1cb67284ab7d0150b0bc7a66eda17b25a581e12524459164",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
