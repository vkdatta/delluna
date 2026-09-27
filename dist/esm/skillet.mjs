export const name="skillet";
export const id="dl_744a8faeafee166cdf3f";
export const url=new URL("../icons/skillet.svg?v=59363747b52efcd098e3167642488b35e8a71a61900a6602af76f48ec2940682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
