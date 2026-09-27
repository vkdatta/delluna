export const name="images-square-duotone";
export const id="dl_9b7a0891c619423ea4f0";
export const url=new URL("../icons/images-square-duotone.svg?v=7041b87c448bbb09b15641467e0b12d28458cd5225a806ad7f87abf1dfc44def",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
