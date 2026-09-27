export const name="beanie";
export const id="dl_129615a960c64e2b95aa";
export const url=new URL("../icons/beanie.svg?v=16cf7157446673c0f2e20fcbf0a967d873fdbb20888f21d2fa1f1ee7fa4f3f5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
