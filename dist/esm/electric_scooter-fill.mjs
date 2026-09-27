export const name="electric_scooter-fill";
export const id="dl_75f35d60764f72018091";
export const url=new URL("../icons/electric_scooter-fill.svg?v=1e65a36f13630c911e3ef55a07b09a214e09b0d6e0d68863ca4b0901e365a771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
