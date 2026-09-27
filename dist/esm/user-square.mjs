export const name="user-square";
export const id="dl_cfff78e53db444852304";
export const url=new URL("../icons/user-square.svg?v=0b489f52453dd8fdb054e3d2f67f31865d996c9f4429ec752b33c470e42baf59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
