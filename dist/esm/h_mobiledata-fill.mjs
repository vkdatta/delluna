export const name="h_mobiledata-fill";
export const id="dl_73fb8802e365cf80df83";
export const url=new URL("../icons/h_mobiledata-fill.svg?v=33ef5288720b2388d80e30a9f203f0da84062f400976b492f7bf384c5b51db8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
