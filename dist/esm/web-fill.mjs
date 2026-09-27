export const name="web-fill";
export const id="dl_2a2d1862808d6c701dfb";
export const url=new URL("../icons/web-fill.svg?v=69b70e4e457b7b02755b143c22813cbd65a17a1eca0aa4396a4abc76bc7502ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
