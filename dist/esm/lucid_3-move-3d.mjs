export const name="lucid_3-move-3d";
export const id="dl_c7fa904ecddc41e3a2c1";
export const url=new URL("../icons/lucid_3-move-3d.svg?v=9feccd608072f85ee18794f3e3a57d7bf3aa89a2b6d620938a5c30c8193def89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
