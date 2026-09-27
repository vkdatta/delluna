export const name="border_bottom-fill";
export const id="dl_773a2ab90b665a7ec983";
export const url=new URL("../icons/border_bottom-fill.svg?v=78c028893d8aaab448045cab74b1a95cd6625a91bb5b4441113486704da0aa30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
