export const name="gesture-fill";
export const id="dl_05c79aafbd8d54ed0e9f";
export const url=new URL("../icons/gesture-fill.svg?v=0d7a8708c8d99d05661f5d45b7a64042ca73abf0e74ffc2495352817220d560d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
