export const name="mobile_gear-fill";
export const id="dl_57582910c8c5544c33e6";
export const url=new URL("../icons/mobile_gear-fill.svg?v=613dbf8b171024762a9c025b5acbe86ab4514128c53bd728475f2b61bf2c2ca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
