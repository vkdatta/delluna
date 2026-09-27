export const name="lucid_3-shopping-cart";
export const id="dl_56899e4c8e13428ab511";
export const url=new URL("../icons/lucid_3-shopping-cart.svg?v=30bf71cbe28729025101d3a8ed70ec3fc69bd7976aca87470fd922c0773f6b64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
