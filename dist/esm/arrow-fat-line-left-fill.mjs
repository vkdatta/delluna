export const name="arrow-fat-line-left-fill";
export const id="dl_eded1dd8d06c4ad492c4";
export const url=new URL("../icons/arrow-fat-line-left-fill.svg?v=69352bc38ebb8eeefae2d9482f7cf0c2a457a3e6120105b158db97b11fc5d7da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
