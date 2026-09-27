export const name="device-rotate-fill";
export const id="dl_32740c8011364a218534";
export const url=new URL("../icons/device-rotate-fill.svg?v=fae464e9090c86ced3ad161722c1165a8cf806e6064e54ed84ff0fc67f7ee996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
