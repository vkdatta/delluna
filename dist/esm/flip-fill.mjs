export const name="flip-fill";
export const id="dl_38012a4ba1861916c329";
export const url=new URL("../icons/flip-fill.svg?v=32cef98fc0cc0a673118422d9803deebc6dbf049098553fda7e6c628336fa96d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
