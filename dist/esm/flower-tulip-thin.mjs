export const name="flower-tulip-thin";
export const id="dl_f5df8b11cf1044cdb648";
export const url=new URL("../icons/flower-tulip-thin.svg?v=aef3965e635a9758604c30c4f6420a2779ab67ef15a045feb2f5cc5c6801f273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
