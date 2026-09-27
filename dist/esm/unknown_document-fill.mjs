export const name="unknown_document-fill";
export const id="dl_e981091549943f8e3731";
export const url=new URL("../icons/unknown_document-fill.svg?v=8a3b2e25451246df6cf650f4a1cee75b9b20643c2d719c35f2b243a2e8800875",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
