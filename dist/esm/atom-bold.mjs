export const name="atom-bold";
export const id="dl_70ebc245e0d54ed396ea";
export const url=new URL("../icons/atom-bold.svg?v=d0cfff70c23bca65f2a76b24edc2c491c8473aa6c02ddff6ed8c3eb15a6be6ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
