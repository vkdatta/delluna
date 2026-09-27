export const name="bank-bold";
export const id="dl_3ec2c8f1d6fe4044a58c";
export const url=new URL("../icons/bank-bold.svg?v=26a001305a4003545663f365264ef461e0f682e4c3c890aed5eccfb4dd9f6934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
