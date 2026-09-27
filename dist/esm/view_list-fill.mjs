export const name="view_list-fill";
export const id="dl_4c71787b0600bf7aacb1";
export const url=new URL("../icons/view_list-fill.svg?v=0474a333ce0e00975aa7d90211b3751a4f4c9f5f9146f44a24cd525e6f22185c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
