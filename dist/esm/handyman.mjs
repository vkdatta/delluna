export const name="handyman";
export const id="dl_4a5a7f20af13f7baa9ad";
export const url=new URL("../icons/handyman.svg?v=3b57f4cef727f14614bc8612f336d21213341084aeb030e734678ddd33237abd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
