export const name="smiley-thin";
export const id="dl_b6488a2172c5f6a5eae6";
export const url=new URL("../icons/smiley-thin.svg?v=872a130244ee4997fcee000fcd7806a7439a90182f66ea4003b6011a4ee5e150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
