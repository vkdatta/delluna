export const name="seal-percent-duotone";
export const id="dl_98d2e815ebb1997f6da9";
export const url=new URL("../icons/seal-percent-duotone.svg?v=84c53942738b804b76a4c876b412a81bc9be12515a2c1a7614878c15dac7d8d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
