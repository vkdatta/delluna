export const name="encrypted_off";
export const id="dl_61c534492439392eee32";
export const url=new URL("../icons/encrypted_off.svg?v=6a0901cbfeec15d1a1585c554d51570bb5e8b07097ff9ecafa22d4f15deae96c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
