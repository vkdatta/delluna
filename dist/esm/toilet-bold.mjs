export const name="toilet-bold";
export const id="dl_c7f68a98422e45cf822b";
export const url=new URL("../icons/T/toilet-bold.svg?v=df710a9c5428aceaa656da0a0366136e52e63bbc8d548e62dca78ac085568eca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
