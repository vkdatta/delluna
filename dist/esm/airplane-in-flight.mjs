export const name="airplane-in-flight";
export const id="dl_779ea1c2efd246919ae7";
export const url=new URL("../icons/airplane-in-flight.svg?v=1f035902f22f11304c4089c3f409e8cab3c33529734710881362aeb4d87779ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
