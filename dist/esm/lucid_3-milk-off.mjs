export const name="lucid_3-milk-off";
export const id="dl_61172184b281481c8326";
export const url=new URL("../icons/lucid_3-milk-off.svg?v=33ff05cc14e8582bc1903d0a103d90da49dc64c88d9aff6f18cfdeec188efbfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
