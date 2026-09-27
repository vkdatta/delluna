export const name="signature-light";
export const id="dl_1f6467b662ffefe40b92";
export const url=new URL("../icons/signature-light.svg?v=99911442a0521908ae19ffedbc085b5a2760a6943d115956f5b76d2f7735ccc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
