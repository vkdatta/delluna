export const name="bank-bold";
export const id="dl_3ec2c8f1d6fe4044a58c";
export const url=new URL("../icons/bank-bold.svg?v=4b86201d763c572b33b98062b0e700dbf528e496bb177cdfb53ccb048f291434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
