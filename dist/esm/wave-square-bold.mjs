export const name="wave-square-bold";
export const id="dl_3418f6a2a8716e6d5ec3";
export const url=new URL("../icons/wave-square-bold.svg?v=d8fa36659da16a3ce7d284dd8fd13511f324d4526a343a03497ebea5b1dd3610",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
