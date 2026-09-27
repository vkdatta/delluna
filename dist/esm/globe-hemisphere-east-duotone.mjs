export const name="globe-hemisphere-east-duotone";
export const id="dl_74aa2208a8fc4d46aa98";
export const url=new URL("../icons/globe-hemisphere-east-duotone.svg?v=cf85e02a14d7064490c42fd5d988cc36ca936dc70815b6c541b74022f4f7357c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
