export const name="info-duotone";
export const id="dl_e79bd17c2ab442eb826f";
export const url=new URL("../icons/info-duotone.svg?v=dec9ea1394c618d6d576ba43e0f08eea265eaf20046e98bc3da19eb4b8da73e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
