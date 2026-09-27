export const name="lucid_2-link-2-off";
export const id="dl_236ce09ff08f463fbf94";
export const url=new URL("../icons/lucid_2-link-2-off.svg?v=98781ab2adde1970677cbb8f9e7f8c528b79ced38cda5157de34a96292da2d1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
