export const name="scan-smiley";
export const id="dl_22699ff6fb714ba69002";
export const url=new URL("../icons/S/scan-smiley.svg?v=5f58c46215d020b04dd187c0ec0c2a5f8f809b249485f628b08475ff9bbe3708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
