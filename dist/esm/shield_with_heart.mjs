export const name="shield_with_heart";
export const id="dl_6b996703627923894ba4";
export const url=new URL("../icons/shield_with_heart.svg?v=87e36e615e4b5cfed753d26c970569f4b89c51e03e168a092627eecea2f5dc1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
