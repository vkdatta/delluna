export const name="filter_remove";
export const id="dl_a5a0ffb4f4db4777840e";
export const url=new URL("../icons/all_60_named_svgs/filter_remove.svg?v=9a9413cd7b9c8a586cf37c60a0d7a96ef0ddb18cb7cea3dc46ff76450fce2f96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
