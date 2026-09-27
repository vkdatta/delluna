export const name="export-thin";
export const id="dl_4effbcf301fb4c44ac70";
export const url=new URL("../icons/export-thin.svg?v=0cd23e4f6939600d6669a38dde266406890dfaa831256370d716064429d3cc6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
