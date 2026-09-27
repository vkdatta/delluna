export const name="trending-up";
export const id="dl_5b95424ac8344d6b865d";
export const url=new URL("../icons/trending-up.svg?v=0839fdcc393e0e29109b72516a8c338c17a124e49ff3cc120a8ed5692dd6b8af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
