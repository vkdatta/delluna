export const name="gavel-bold";
export const id="dl_3514d71f918d4aac8bda";
export const url=new URL("../icons/gavel-bold.svg?v=1e57709f9b54d5dc0e240aef4982bb861e85c7ab9d4fa757666fdd19c4bceb8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
