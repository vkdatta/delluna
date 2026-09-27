export const name="rotate_90_degrees_cw";
export const id="dl_e4a998d170f2cef7f44b";
export const url=new URL("../icons/rotate_90_degrees_cw.svg?v=b02c3e452ca2c2dec9e31a36f24d8bfa517a5e83f560b3414dc091a717d8ca5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
