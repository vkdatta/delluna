export const name="smb_share";
export const id="dl_a0d637c03cdda5331f8f";
export const url=new URL("../icons/smb_share.svg?v=e30cfd8c679e288248576c4667c8bbec3dd027e72e626c99d9f5497b54c95d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
