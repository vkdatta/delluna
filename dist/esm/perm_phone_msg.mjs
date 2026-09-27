export const name="perm_phone_msg";
export const id="dl_33c113920108b6186b86";
export const url=new URL("../icons/perm_phone_msg.svg?v=7510ed4541f4badc26193777644b463b39e8edca010538fa73d8131e0ddd38f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
