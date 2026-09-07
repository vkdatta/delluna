export const name="users-bold";
export const id="dl_fb903024849b45ed8ac2";
export const url=new URL("../icons/U/users-bold.svg?v=3483c79bd35afe632197363741da6018b1204b168cf3f34e7073f574306677a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
