export const name="feather-duotone";
export const id="dl_aa31c2e3f9604c888654";
export const url=new URL("../icons/feather-duotone.svg?v=21bdce60f91624f51a3c6e174fd5f18716d14bccef1c968fa464ca6df36e7ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
