export const name="verified_user";
export const id="dl_a7970914f52243e784e0";
export const url=new URL("../icons/verified_user.svg?v=66fb90e12853d79939662e76ea464101dc73f822ebfb02c475828ee5c5625a8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
