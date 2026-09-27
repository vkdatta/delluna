export const name="face-fill";
export const id="dl_a6f9e3f5fdd6f1c8789b";
export const url=new URL("../icons/face-fill.svg?v=06c78c20d5922a2828fb4785e64b20e68ad29761935e7f6c3912a98129d95505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
