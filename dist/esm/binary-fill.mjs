export const name="binary-fill";
export const id="dl_0a17650d634e48acb5d6";
export const url=new URL("../icons/binary-fill.svg?v=701ccba0c22f71f764105498ef6e6b78912e7ef05094107a27eb20e02d21125c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
