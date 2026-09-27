export const name="bank-bold";
export const id="dl_3ec2c8f1d6fe4044a58c";
export const url=new URL("../icons/bank-bold.svg?v=59c57d1615dd6d021f895b543ec02ea41e7aee3916538a0df180a4fbc71307d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
