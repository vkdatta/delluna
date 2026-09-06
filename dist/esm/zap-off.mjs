export const name="zap-off";
export const id="dl_a0923715994a4b39aa67";
export const url=new URL("../icons/zap-off.svg?v=191cb82d272fdd58219fd75fd3fa8b3cc710c1c307772a420089b55c380ee6fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
