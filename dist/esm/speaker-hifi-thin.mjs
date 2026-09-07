export const name="speaker-hifi-thin";
export const id="dl_284e8305a4b24be5bbfe";
export const url=new URL("../icons/S/speaker-hifi-thin.svg?v=488c147ba5f049eba55268af3d0aac12bb325609842a25bc0e078210b5f00f02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
