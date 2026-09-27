export const name="minus-square-duotone";
export const id="dl_3640b9c485dc4188a00f";
export const url=new URL("../icons/minus-square-duotone.svg?v=c1181e801a7ce61018f9f5933244b5a44c425a22e1941fa433f56c2c3c905aa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
