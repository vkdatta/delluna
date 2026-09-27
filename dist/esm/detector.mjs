export const name="detector";
export const id="dl_10569a8d27736db624ac";
export const url=new URL("../icons/detector.svg?v=7abaa50d6ec2dba28019f9be671dd8180414801f6d0109a65cbcbaff9e8d4ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
