export const name="steps-duotone";
export const id="dl_454633dd8b96ddbfa621";
export const url=new URL("../icons/steps-duotone.svg?v=0774735b60553d9dc19047426f4c5cfa30d45e7b6322fb7aaf7b3bcf5c876205",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
