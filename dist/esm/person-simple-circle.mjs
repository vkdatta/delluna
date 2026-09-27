export const name="person-simple-circle";
export const id="dl_cb0987f548744efa9f43";
export const url=new URL("../icons/person-simple-circle.svg?v=f3c75c79353e58d1fc296bc3544bbf55707d0b468fb6b32c7bda688ef35307e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
