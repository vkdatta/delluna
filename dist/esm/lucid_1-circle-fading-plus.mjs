export const name="lucid_1-circle-fading-plus";
export const id="dl_5c5b305f55854ae3bb6e";
export const url=new URL("../icons/lucid_1-circle-fading-plus.svg?v=196ae7222cfbfe7fe72069e27a2a746615528c020c61f603e4cb2e234ac7f461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
