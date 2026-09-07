export const name="upload-simple-thin";
export const id="dl_53bc35d8e9ee4979967a";
export const url=new URL("../icons/U/upload-simple-thin.svg?v=992cb2fcbd88edb6bfd86f55c970912beb4b109a60ffd071c61bdb586b8af2b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
