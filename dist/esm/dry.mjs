export const name="dry";
export const id="dl_6023869a455b7d109c90";
export const url=new URL("../icons/dry.svg?v=31fc42b9f75b72a7c4260e226acdec3028b8475fdd383a4ca6bee0b565e9bbdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
