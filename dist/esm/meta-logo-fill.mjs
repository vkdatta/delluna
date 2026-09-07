export const name="meta-logo-fill";
export const id="dl_58db70eb00ef462bb19a";
export const url=new URL("../icons/meta-logo-fill.svg?v=fad73a27060a7476bec006d5d91e78ad94692ce40e777f21e0fd3b872d7760f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
