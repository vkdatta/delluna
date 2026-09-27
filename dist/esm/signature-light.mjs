export const name="signature-light";
export const id="dl_9e46a910f2e416241ba0";
export const url=new URL("../icons/signature-light.svg?v=41511c7a28ff6c6d1111c35830b25b1cf56cd81c1f16a9a86185dc2fc4d148cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
