export const name="my_location-fill";
export const id="dl_f283420939d7ef2b2425";
export const url=new URL("../icons/my_location-fill.svg?v=f33c7ae293a927e31cc3f4b7f58ac0a69e3a6bbb163068d16b60f5db59fdccf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
