export const name="upload-thin";
export const id="dl_84506ccededf5d797eb1";
export const url=new URL("../icons/upload-thin.svg?v=749cdf9e7cef9f3ffad7f5c51d9995e4f4930464a86e66abe572053c00e5e0bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
