export const name="webcam";
export const id="dl_6d12e0a479464e3f9222";
export const url=new URL("../icons/webcam.svg?v=fa22cf620271aeb9627ac60d306dc472ec475bb9c732cd084cedeb33b6db50fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
