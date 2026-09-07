export const name="wifi-high-light";
export const id="dl_6e5fcebcc8ba415290e1";
export const url=new URL("../icons/W/wifi-high-light.svg?v=37b46b4f7c7ee136227f66f6f48a2b80ffcc629fb8f9d86b3830840365be36a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
