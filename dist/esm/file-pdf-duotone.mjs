export const name="file-pdf-duotone";
export const id="dl_290e2a6dfa304ec8b990";
export const url=new URL("../icons/file-pdf-duotone.svg?v=5795762bbfc931d22741ccde2f8a2d7378adc66fa712300f1b849888f670bcf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
