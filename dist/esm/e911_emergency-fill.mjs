export const name="e911_emergency-fill";
export const id="dl_b2c6ad846c2e9dbf18e4";
export const url=new URL("../icons/e911_emergency-fill.svg?v=ee7b909360989fd4b728e9333ec9a872f1f69bbc26d8b617fb7f3132ea92e83a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
