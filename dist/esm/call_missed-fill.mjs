export const name="call_missed-fill";
export const id="dl_1538ed0a75353099fb8f";
export const url=new URL("../icons/call_missed-fill.svg?v=8c58472848ca631124bc0a14adbbdfa8cb00917fbf9149a72f642a6554455edd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
