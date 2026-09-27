export const name="bottom_navigation-fill";
export const id="dl_51cb47cb3f71d72d5d53";
export const url=new URL("../icons/bottom_navigation-fill.svg?v=0ad090384fed1cb1e7ef2a101caf22a8838bc382f4b0c368f1f96d0af754aa73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
