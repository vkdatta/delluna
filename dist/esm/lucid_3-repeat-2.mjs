export const name="lucid_3-repeat-2";
export const id="dl_a02f61487c534e409d50";
export const url=new URL("../icons/lucid_3-repeat-2.svg?v=103f4fe74c5547e3314a7e5b3407bd4e1e92bbd4cca93d578b50310aad6e4c27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
