export const name="megaphone-duotone";
export const id="dl_f9bf188c1bb445aea458";
export const url=new URL("../icons/megaphone-duotone.svg?v=a303a16a16bdf12cc1b35603e3477e9be0bfbeea219210a36c7dff766cc2435a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
