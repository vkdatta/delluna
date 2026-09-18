export const name="table_sign-fill";
export const id="dl_a374b5b6b96d453c8ec7";
export const url=new URL("../icons/table_sign-fill.svg?v=b82db77522927b08778d0acb336c94805a0eb4c7e764a91f99a8cfde6e284912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
