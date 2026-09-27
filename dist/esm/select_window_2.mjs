export const name="select_window_2";
export const id="dl_2a0aaa88c138ce03ad72";
export const url=new URL("../icons/select_window_2.svg?v=96a6330568da0aaa3c9c992a815d12d1492536c5ecd98302d5966376e4ab32b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
