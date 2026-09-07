export const name="arrow-square-down-left";
export const id="dl_beb19eeac64e4d3c9e93";
export const url=new URL("../icons/arrow-square-down-left.svg?v=717703de33ca52241502151750e8ef1ec2b3a9e03661ec3f84024b8310d4aece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
