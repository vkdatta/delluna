export const name="phosphor-logo";
export const id="dl_a40b0befca7c486f8377";
export const url=new URL("../icons/phosphor-logo.svg?v=102464ab04f6edbf134d0b56b85be99b1092b6ce276d797764db1817335caf27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
