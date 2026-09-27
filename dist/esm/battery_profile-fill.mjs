export const name="battery_profile-fill";
export const id="dl_0797d7b811012998dd12";
export const url=new URL("../icons/battery_profile-fill.svg?v=9bcc8f722cc6d9dc6c9d6c9d5e0aaacd9cb7a949e41db9bff705d2d61505feec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
