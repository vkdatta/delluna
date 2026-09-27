export const name="contactless_off-fill";
export const id="dl_0161e70f9fcd59b6befd";
export const url=new URL("../icons/contactless_off-fill.svg?v=5eed911c1a28f5c2d437133a3455fa3c468aff168873eb9f85eb4fa9888a2f25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
