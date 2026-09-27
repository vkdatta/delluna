export const name="file-c-sharp-light";
export const id="dl_4a0bcc2e6251456f94d8";
export const url=new URL("../icons/file-c-sharp-light.svg?v=ed251ee40880ee6f0d656a97458fcedbe870fad18f65ed65048fbb25aead0eb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
