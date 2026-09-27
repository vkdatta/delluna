export const name="personal_bag_off-fill";
export const id="dl_2a0b17524d4455bc66c7";
export const url=new URL("../icons/personal_bag_off-fill.svg?v=b17a8cb7dce65ff9cf05a6a24b2a2fde0a01294fc9e3fa5e7b64c0c3238b35a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
