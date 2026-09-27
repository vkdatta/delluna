export const name="mode_night";
export const id="dl_419b3141ea259da8f17c";
export const url=new URL("../icons/mode_night.svg?v=8f0a17aaacfcc819852bfd76453a9a7e31bc642b45511b0558d50b8974a2402c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
