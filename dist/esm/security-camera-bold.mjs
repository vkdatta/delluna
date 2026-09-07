export const name="security-camera-bold";
export const id="dl_21f38d1b0b7049538291";
export const url=new URL("../icons/S/security-camera-bold.svg?v=ec7f09beae3ae265615c6246e53400b3caf85ad048d6c21ca4e460f21ade2e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
