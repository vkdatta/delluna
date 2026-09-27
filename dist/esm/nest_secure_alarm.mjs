export const name="nest_secure_alarm";
export const id="dl_7428f41a37d0bd87b5f6";
export const url=new URL("../icons/nest_secure_alarm.svg?v=c14f20b62ada9e32c10be1abaa7fcd9c4f23940392a1382db3b60bb3235f8107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
