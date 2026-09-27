export const name="file-png";
export const id="dl_a7cd59a83f6d4da78775";
export const url=new URL("../icons/file-png.svg?v=734fad6f66e2a34bf0336dcdc591c0bb49c4d1513b4511ef059aa5a92671144d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
