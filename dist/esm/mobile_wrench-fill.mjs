export const name="mobile_wrench-fill";
export const id="dl_8a9f51d9ea0e371eb9b1";
export const url=new URL("../icons/mobile_wrench-fill.svg?v=8f7fe229311d4ad59ea60cf8593ea09b6a32905340524e9c98248f4ea8e4f566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
