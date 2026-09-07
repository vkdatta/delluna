export const name="filter_blocks";
export const id="dl_d989a6fa7c0b49139449";
export const url=new URL("../icons/all_60_named_svgs/filter_blocks.svg?v=4b1e41bf8acac26ed593829cab847258fc1978a9a93eb9a0fb0f39fe60cb9f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
