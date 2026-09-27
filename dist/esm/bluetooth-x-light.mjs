export const name="bluetooth-x-light";
export const id="dl_0ba5520139804699bc37";
export const url=new URL("../icons/bluetooth-x-light.svg?v=b3a643fead02c7bd77b037cc8052b7bc0a01a1cf13d9293d00ab35dbbf04d13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
