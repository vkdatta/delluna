export const name="near_me_disabled-fill";
export const id="dl_03ded1c0dd2ef2888eee";
export const url=new URL("../icons/near_me_disabled-fill.svg?v=4eb1768f3307ac7104e9682f5f3571b9b70b5c640b2806da70efa59522778bf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
