export const name="full_hd-fill";
export const id="dl_47fe63e5d0b646ac8b30";
export const url=new URL("../icons/full_hd-fill.svg?v=31c2733231df8c46b9142d82e0804b31754e76ec4b64b90831ff13a51e0e1421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
