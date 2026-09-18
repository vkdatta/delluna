export const name="arrow_selector_tool-fill";
export const id="dl_c6945eb0472a4900bde3";
export const url=new URL("../icons/arrow_selector_tool-fill.svg?v=8bc4682fb1682989a2a3b130be9ce2666a6d2ffb6106f65ec35a0e6a409278fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
