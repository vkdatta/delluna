export const name="dropper_eye";
export const id="dl_d229958fecbea834bcb5";
export const url=new URL("../icons/dropper_eye.svg?v=f3aa04b92f9aeb4299bf8089595b4389a663cea1aaa78af17b427f07fc550f1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
