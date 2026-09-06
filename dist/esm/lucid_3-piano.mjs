export const name="lucid_3-piano";
export const id="dl_fee7b600f8f346abaafa";
export const url=new URL("../icons/lucid_3-piano.svg?v=3e410894a44f891d25e2b407b92e64498ffea4a71b5054f4c399c44092936017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
