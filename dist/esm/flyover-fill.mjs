export const name="flyover-fill";
export const id="dl_81c03753c3fc3c92883b";
export const url=new URL("../icons/flyover-fill.svg?v=d00f3d763c8a928ead61231b35c769b191b7c47aa774d350afe9c014fede3b64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
