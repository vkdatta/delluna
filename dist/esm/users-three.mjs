export const name="users-three";
export const id="dl_4f3c90cd6f23b26ede5c";
export const url=new URL("../icons/users-three.svg?v=a65a82c9de08c0c35dcdf4623b3ef99cbe65fface3b3b73f4ac926922432b405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
