export const name="sock-fill";
export const id="dl_03e741bb8808bc6d55fc";
export const url=new URL("../icons/sock-fill.svg?v=034a18735389bc5d8567cf7ba57469f5253fbf799a8ee46a594f5971e6274a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
