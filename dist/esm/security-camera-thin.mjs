export const name="security-camera-thin";
export const id="dl_172cdfa4116d461d99fd";
export const url=new URL("../icons/S/security-camera-thin.svg?v=462d767eec6bef37b300927f30a4a9782f91c9392524b70929c08bf180424dee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
