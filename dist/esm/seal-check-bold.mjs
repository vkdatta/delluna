export const name="seal-check-bold";
export const id="dl_1883b1970159a7ebd452";
export const url=new URL("../icons/seal-check-bold.svg?v=b532995d13966ba8f343462d646fb9e13914c5d536e795b7c835f271d094bb87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
