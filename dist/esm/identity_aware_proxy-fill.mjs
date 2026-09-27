export const name="identity_aware_proxy-fill";
export const id="dl_43e403b1f034c57e6925";
export const url=new URL("../icons/identity_aware_proxy-fill.svg?v=e06f4023665e0f4214a3f4771812f96b999cd40e066f08436c8243880eeb8792",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
