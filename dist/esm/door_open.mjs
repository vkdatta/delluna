export const name="door_open";
export const id="dl_e6348f30be0935a6c688";
export const url=new URL("../icons/door_open.svg?v=d7e1bf2adc350bf9b2b5a12352770d557a026f21dd02f9503ca91a378c9c0daf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
