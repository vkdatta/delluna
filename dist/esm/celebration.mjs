export const name="celebration";
export const id="dl_67e362f70eb145f8ba2c";
export const url=new URL("../icons/C/celebration.svg?v=534be7ec2176be8eba90f2cd00ade9ecdd8df452dd39124feb7b44b0bed1b4a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
