export const name="mystery-fill";
export const id="dl_377925e56e454e5fb727";
export const url=new URL("../icons/mystery-fill.svg?v=8502e8e6a17c137a1fd66d4d83c8b60b1c6d6204ecb01fd5a608d9d490074cff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
