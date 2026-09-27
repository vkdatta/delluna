export const name="face_right-fill";
export const id="dl_3bffb763240344aac116";
export const url=new URL("../icons/face_right-fill.svg?v=a2ccc255201bca56c3739487de67a8158cb767aeeccfad7af5b352767aa9fe86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
