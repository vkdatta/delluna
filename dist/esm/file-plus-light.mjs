export const name="file-plus-light";
export const id="dl_e42952988b7e4abcb626";
export const url=new URL("../icons/file-plus-light.svg?v=d621525d06d49117485d7211e889530013f477d924d0dcb8f43cec2223bbe4f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
