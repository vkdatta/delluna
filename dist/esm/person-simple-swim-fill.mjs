export const name="person-simple-swim-fill";
export const id="dl_96e709f0532c440ca3f4";
export const url=new URL("../icons/person-simple-swim-fill.svg?v=52c33c079e066ec2a8e80991ed5dff84beb4734db09670add4d63fc225055c85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
