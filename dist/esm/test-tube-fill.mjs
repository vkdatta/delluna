export const name="test-tube-fill";
export const id="dl_157a06a133f84b5ca3bf";
export const url=new URL("../icons/T/test-tube-fill.svg?v=cf5c35008fc3f2a285e84e45fa810ccb52a0342d6f93be440f6e6bd4056f1a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
