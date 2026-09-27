export const name="lucid_1-contact-round";
export const id="dl_21ab568ba1444c5b8e3d";
export const url=new URL("../icons/lucid_1-contact-round.svg?v=f638f32569f3b943f6a436546feda07ee4de91281ac09c5c3b9ac5e0130f52b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
