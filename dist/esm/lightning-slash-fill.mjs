export const name="lightning-slash-fill";
export const id="dl_6cee9b0882b543128bbb";
export const url=new URL("../icons/lightning-slash-fill.svg?v=4c0f229b7262d805f0eb7c41efb2623af030aefb13b9666787e65bc6b0939e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
