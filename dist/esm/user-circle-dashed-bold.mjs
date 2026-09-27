export const name="user-circle-dashed-bold";
export const id="dl_4a6d10804f9079552273";
export const url=new URL("../icons/user-circle-dashed-bold.svg?v=8801a4801487dad7610f43365727416c581394947334cec8a25a4d3591594abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
