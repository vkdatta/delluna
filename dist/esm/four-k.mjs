export const name="four-k";
export const id="dl_12de0e908b4f46b49d30";
export const url=new URL("../icons/four-k.svg?v=84424f8993ce6299e12d5753ff7e5c69d4e6e8c0019ec23e57d2771fc38acb72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
