export const name="nightlife";
export const id="dl_d2aaf3001fe5b7ee7458";
export const url=new URL("../icons/nightlife.svg?v=a6b9238ae70ccddc3f4a52393cc0e6dd973f11f0b1091b87a8b377cb64f0e269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
