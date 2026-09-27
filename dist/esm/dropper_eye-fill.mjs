export const name="dropper_eye-fill";
export const id="dl_9ed61574adb3f346cf1f";
export const url=new URL("../icons/dropper_eye-fill.svg?v=5ab8e3ebf9afa596b1dd81c9eee8db8ebede82c53a30db1c3b4ff165b730c6b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
