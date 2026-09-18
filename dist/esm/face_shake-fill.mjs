export const name="face_shake-fill";
export const id="dl_cd77d1d4c4dd444689bd";
export const url=new URL("../icons/face_shake-fill.svg?v=7d1ad90d0c64f8a4e1971012f10971be9864e1f4c2ecfe8d90989946052ae548",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
