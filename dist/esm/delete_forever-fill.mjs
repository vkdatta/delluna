export const name="delete_forever-fill";
export const id="dl_479e1ba8633fa5874717";
export const url=new URL("../icons/delete_forever-fill.svg?v=689db5dfebedcbbd9d2750da6c2af285c1eae1f004590582f1e6a33d00d4bf00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
