export const name="pin_drop";
export const id="dl_785ea1e423a8062bb998";
export const url=new URL("../icons/pin_drop.svg?v=ddb0f6757b2ab1f2681152d075045e98b38894ae1c587fac7c84f8f199cc2e13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
