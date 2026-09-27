export const name="scan_delete";
export const id="dl_feb2038a234fe52482cd";
export const url=new URL("../icons/scan_delete.svg?v=a41e9c9f9ec2ec4a91991a2c153764e72f1bd30a121540d46fc1d335114a1a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
