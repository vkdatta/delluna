export const name="lucid_3-phone-call";
export const id="dl_43664c461e5542ee9988";
export const url=new URL("../icons/lucid_3-phone-call.svg?v=e37646f96aa39a5d8f025c00b9d93321933c5e49b4298eb91ca05c1e58170456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
