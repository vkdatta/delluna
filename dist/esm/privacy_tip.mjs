export const name="privacy_tip";
export const id="dl_a2f5bbe5212c05d7c0e6";
export const url=new URL("../icons/privacy_tip.svg?v=a55a5793546fbe87ff456a86b0a41dd533cf3183a706eb629efc6a77e0d9af4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
