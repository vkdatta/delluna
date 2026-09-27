export const name="high_res";
export const id="dl_ebe29eee3b1df9619c0e";
export const url=new URL("../icons/high_res.svg?v=60e944ac9624c0ba05afa63ab524471aad728cf6ce50b6ac693189f807373919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
