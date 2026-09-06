export const name="paperclip-horizontal-thin";
export const id="dl_17f571a7fbe84db0b49d";
export const url=new URL("../icons/paperclip-horizontal-thin.svg?v=88c9990ba8ef4e81dc1a8af6bfbbfaf5a6248d60fc095fbf7e150d371047bcea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
