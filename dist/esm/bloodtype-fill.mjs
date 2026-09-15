export const name="bloodtype-fill";
export const id="dl_169f771e547c426aa5aa";
export const url=new URL("../icons/B/bloodtype-fill.svg?v=f5249c86b63847c38fb33ccb8664758b9104f91f6aba626714831d812e4a6bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
