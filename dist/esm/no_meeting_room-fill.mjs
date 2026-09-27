export const name="no_meeting_room-fill";
export const id="dl_1d07bc937f0d438b90cc";
export const url=new URL("../icons/no_meeting_room-fill.svg?v=76d12207fe09778e0a2177f469837ba82561f05535eda69209643c631118630a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
