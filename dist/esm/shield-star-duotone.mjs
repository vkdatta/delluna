export const name="shield-star-duotone";
export const id="dl_ec518948e618a2fe3364";
export const url=new URL("../icons/shield-star-duotone.svg?v=c3d393780824e191c96dd42fd4f8ce8b381fcd7d293e9cc75ade369fa04ca52a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
