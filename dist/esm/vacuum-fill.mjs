export const name="vacuum-fill";
export const id="dl_b9170a3568830456e35f";
export const url=new URL("../icons/vacuum-fill.svg?v=8f1bd119815bcb71723d0fc6586b16293976eb882e1eb1143ae0453f41ee22ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
