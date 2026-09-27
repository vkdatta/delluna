export const name="male-fill";
export const id="dl_74b1de0069e7f9e84fd1";
export const url=new URL("../icons/male-fill.svg?v=6968a19f9e65077e5d12669769b0013af2dce7b207acb654ac1149057b76b35c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
