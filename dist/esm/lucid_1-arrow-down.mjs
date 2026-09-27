export const name="lucid_1-arrow-down";
export const id="dl_df11064ebc1c49888595";
export const url=new URL("../icons/lucid_1-arrow-down.svg?v=69261272100941c3f7ed30b5f469eab7830991f590b578399ae8e5544c3259d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
