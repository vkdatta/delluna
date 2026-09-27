export const name="left_click-fill";
export const id="dl_460b7c0dfa41207b51d6";
export const url=new URL("../icons/left_click-fill.svg?v=488b1df8e64daaf2b575ac155c0ea2e4dcfd3e8cc92848e9332e77a3fb9885fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
