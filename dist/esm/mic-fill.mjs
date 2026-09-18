export const name="mic-fill";
export const id="dl_241f157e8f064631892c";
export const url=new URL("../icons/M/mic-fill.svg?v=0ce24f4ce875c4cd4197985a8ffd00ed0b309baa18d1775b2849050d95a2f7ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
