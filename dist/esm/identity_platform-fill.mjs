export const name="identity_platform-fill";
export const id="dl_96707adbe10c41f38112";
export const url=new URL("../icons/identity_platform-fill.svg?v=d304c61f9a35f4a10f96ee728bd681e95ef8e7004d3097d1c2a57b98c05b622a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
