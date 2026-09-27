export const name="sunglasses-fill";
export const id="dl_4056b3ad4330324f9ca7";
export const url=new URL("../icons/sunglasses-fill.svg?v=d85aeaa7c4636b6d504a85458b692e3aa646ba7c5a187036999fab0b848ccf70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
