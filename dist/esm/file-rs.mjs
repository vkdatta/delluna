export const name="file-rs";
export const id="dl_1f788dde1d5c431080c8";
export const url=new URL("../icons/file-rs.svg?v=2c1a49f3d691756bb950636ed6289973b125de0c93e837b5874ce8bd0670f66a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
