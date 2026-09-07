export const name="add_alt";
export const id="dl_7eb0a0dd6cf644729d91";
export const url=new URL("../icons/all_60_named_svgs/add_alt.svg?v=0791d7ba921a540331c11d985476a7923177f9169811f6b095997941f70a187f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
