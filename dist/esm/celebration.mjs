export const name="celebration";
export const id="dl_12d2645f23f0a0dc3640";
export const url=new URL("../icons/celebration.svg?v=534be7ec2176be8eba90f2cd00ade9ecdd8df452dd39124feb7b44b0bed1b4a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
