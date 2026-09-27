export const name="update-fill";
export const id="dl_4f16083f37e310892ecb";
export const url=new URL("../icons/update-fill.svg?v=a3741b56ec2b9b920d81d105ab733f45cb005c64ba8769db85cf1cca21b038f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
