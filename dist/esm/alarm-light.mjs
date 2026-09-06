export const name="alarm-light";
export const id="dl_13ffd4e46006481190e3";
export const url=new URL("../icons/alarm-light.svg?v=dd9eb6043f15503dbac41c1018425e9e4699defb9ef4aa63a13354a57c898bec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
