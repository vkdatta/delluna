export const name="select_expand";
export const id="dl_d01b869c3f854025b1c2";
export const url=new URL("../icons/all_60_named_svgs/select_expand.svg?v=3291332d3b5cdf7e8c8e132b37f7de86adea5840486af64c9d4650d5a549330f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
