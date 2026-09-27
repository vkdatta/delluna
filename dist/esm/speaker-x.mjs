export const name="speaker-x";
export const id="dl_84227bc8f2c6cf4ce87b";
export const url=new URL("../icons/speaker-x.svg?v=6154c22e1140aae33d02b9ec2577103a5f274db5dfb56f80de282840f33e6d69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
