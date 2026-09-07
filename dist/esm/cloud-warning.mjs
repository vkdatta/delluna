export const name="cloud-warning";
export const id="dl_8eb73ad5c8ca47548249";
export const url=new URL("../icons/cloud-warning.svg?v=47b85fa66c3c4c4ae86a5841ccd95e3375e987f1168850572b702f4c59d715fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
