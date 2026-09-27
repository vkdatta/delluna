export const name="parabola";
export const id="dl_9f42c9764f804d7abd2a";
export const url=new URL("../icons/parabola.svg?v=50b9a9f9ae5c7ca85950214144404dc37b07efcd1601ba16dc312cef4a4e31cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
