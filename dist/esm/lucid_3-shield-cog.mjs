export const name="lucid_3-shield-cog";
export const id="dl_650b3be775be45ed86f8";
export const url=new URL("../icons/lucid_3-shield-cog.svg?v=fb0af8eb79bff4076ed0ecc810d7053254c4fe671f0ff142cb42029ec30aa699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
