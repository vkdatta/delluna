export const name="radio-light";
export const id="dl_bb4b84d711ae4c489952";
export const url=new URL("../icons/radio-light.svg?v=d5c91cddb84468284dc603db947b5341fdbde4d108b692ec74292b76ce7fa7dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
