export const name="lucid_3-signpost";
export const id="dl_c61a0d4015a64f2b8015";
export const url=new URL("../icons/lucid_3-signpost.svg?v=d6af19e9de05dce40d83be8fe7efb671738e0ba683e75bb9d31f733dc110f51c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
