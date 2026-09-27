export const name="outdoor_garden-fill";
export const id="dl_58f801c2d85eef0a2302";
export const url=new URL("../icons/outdoor_garden-fill.svg?v=8628e172b54b4f51409e68e6a4ba85a5e326b1625a8a6a6e3d20d2b5db031b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
