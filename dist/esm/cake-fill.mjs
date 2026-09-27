export const name="cake-fill";
export const id="dl_0018db462a1b4b118b3b";
export const url=new URL("../icons/cake-fill.svg?v=7689ca5a6a1f651b0ba589728aa5697d5520760b7fdc825880710b469badf819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
