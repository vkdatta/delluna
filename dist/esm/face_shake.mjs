export const name="face_shake";
export const id="dl_100cee203cfb4148ba69";
export const url=new URL("../icons/F/face_shake.svg?v=d9282f095f45b394366fbcd43e155a222e446d3aeb09f43716cf0c4676ef1ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
