export const name="pinterest-logo-thin";
export const id="dl_fcc3b0f550ba4b5aa70a";
export const url=new URL("../icons/pinterest-logo-thin.svg?v=793aebffd10ea800b56f0852b6bcb9b40319d641d52788d42dd76909c7ef8026",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
