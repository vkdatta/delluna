export const name="lightning_stand-fill";
export const id="dl_51aa32db390371aef415";
export const url=new URL("../icons/lightning_stand-fill.svg?v=53b5e1436a10cf89c736d8ff3c7b51d7f91a21c1468ebe87d70e18f499d7d776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
