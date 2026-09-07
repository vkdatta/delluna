export const name="signature-fill";
export const id="dl_19b0895f3a444e368c8b";
export const url=new URL("../icons/S/signature-fill.svg?v=cf77c1f4d7ef77cc4844626d18dd8f2bb5fe14a92ec0c4f0715f5c674dae9747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
