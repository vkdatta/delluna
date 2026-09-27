export const name="image-fill";
export const id="dl_0b92cf92957a473badb2";
export const url=new URL("../icons/image-fill.svg?v=a062c300a4f598eea010c9be3d632d731255750ee91e5d54ed6d98b63ed5188e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
