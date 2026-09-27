export const name="phone-disconnect-thin";
export const id="dl_1f59349cf9f5402480a5";
export const url=new URL("../icons/phone-disconnect-thin.svg?v=2c02545a143c2c3fa3163df0f541ae7fd75444cb40bc5394fa598bf742181519",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
