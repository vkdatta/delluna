export const name="quick_reference";
export const id="dl_72ba78d83708f2cee8bb";
export const url=new URL("../icons/quick_reference.svg?v=705fbb4290b5dd21d25e4aa091160632d67aea36db9c8c939ef8b762a93c196d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
