export const name="vibrate-light";
export const id="dl_1132a90328444726b4e5";
export const url=new URL("../icons/V/vibrate-light.svg?v=b139e547f9f66554955a7fa2f40e1fed1b1fd227e2c825b3aa3c23233c5fd527",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
