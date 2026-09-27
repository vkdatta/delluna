export const name="apk_document";
export const id="dl_f4d2971fe135266249f6";
export const url=new URL("../icons/apk_document.svg?v=f507eb2eb38c8f74764608e1c623ae9e5c05b996eb8215a388646ac9e10afed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
