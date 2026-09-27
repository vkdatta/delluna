export const name="google-logo-thin";
export const id="dl_aa04e655ebc5478f8c29";
export const url=new URL("../icons/google-logo-thin.svg?v=376de952223c1ac900a997cd246d81e8054b8a265b9d99475563f2acebc5355d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
