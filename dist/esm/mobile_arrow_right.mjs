export const name="mobile_arrow_right";
export const id="dl_50c6250868c57399c258";
export const url=new URL("../icons/mobile_arrow_right.svg?v=65aa057bc9910dea333886a753337cf4620ef6baf797f18b6a2514df667ccd3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
