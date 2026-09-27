export const name="lucid_3-octagon-alert";
export const id="dl_10638f22d70b4df49800";
export const url=new URL("../icons/lucid_3-octagon-alert.svg?v=26ccedaadbf4fc87dff1167132f80e29d5eb93f640be8e71d731c7c36fa62343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
