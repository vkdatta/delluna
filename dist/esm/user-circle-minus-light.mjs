export const name="user-circle-minus-light";
export const id="dl_36ea415eaf0e45cea175";
export const url=new URL("../icons/user-circle-minus-light.svg?v=95a7f93aed8617ed7925584d63a60b7d251fd06d394150e623ec962db788c128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
