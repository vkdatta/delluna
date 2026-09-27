export const name="notifications_off";
export const id="dl_1821f6f8c3196d6dc2fe";
export const url=new URL("../icons/notifications_off.svg?v=c8bd50bc51f4da1ddbfed695a3dbb8b656833d392bec523c5f567656020bf183",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
