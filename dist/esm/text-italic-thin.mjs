export const name="text-italic-thin";
export const id="dl_63f5cb96204b41c58050";
export const url=new URL("../icons/T/text-italic-thin.svg?v=42e2f5571178616c128382813d0c9de960495a5f07802e35d24dc029cf160880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
