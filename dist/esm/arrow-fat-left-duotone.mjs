export const name="arrow-fat-left-duotone";
export const id="dl_655a88bddad644d195ab";
export const url=new URL("../icons/arrow-fat-left-duotone.svg?v=c4e5da6b43ddfb11d0331d4116fe96172a3f7de4ec2a4a380a50a11f403041d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
