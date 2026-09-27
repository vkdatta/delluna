export const name="lucid_3-repeat-2";
export const id="dl_a02f61487c534e409d50";
export const url=new URL("../icons/lucid_3-repeat-2.svg?v=9064ee0de1a0883f6a8434ea5b89d26a54b8e36efcf775acdbbdc183ecd2da99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
