export const name="microphone-stage";
export const id="dl_6b7998aee0054900a31e";
export const url=new URL("../icons/microphone-stage.svg?v=aca9c779a4d9df6e02468118d5d26c7e9878807ee8ac0f0be1ab566fe27a3dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
