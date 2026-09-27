export const name="check_box";
export const id="dl_ea60e38e624445849857";
export const url=new URL("../icons/check_box.svg?v=a7466d8e581933f554dd00caa367d1a806e77a17a685339bc7e1fb0db1ce4d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
