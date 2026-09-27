export const name="hand-grabbing-thin";
export const id="dl_9a6fb2fc9cf941a1ae93";
export const url=new URL("../icons/hand-grabbing-thin.svg?v=1738f33164c99c01be2ea048f073ad1bab7f42b79866e00c01528b1591bfc2cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
