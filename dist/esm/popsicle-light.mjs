export const name="popsicle-light";
export const id="dl_2f8413dc165e45f0a41e";
export const url=new URL("../icons/popsicle-light.svg?v=289d043bab8df21d23a82ab0f39b66bdc570fbf2cd1087e97096c2accda84484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
