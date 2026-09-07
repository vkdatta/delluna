export const name="soundcloud-logo-bold";
export const id="dl_b48a037a2065420c864a";
export const url=new URL("../icons/S/soundcloud-logo-bold.svg?v=29b14f5606274460d027920bf28c597edeffd3544db6c81e4e53c40a940cf6cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
