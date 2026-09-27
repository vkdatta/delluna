export const name="cloud-fog";
export const id="dl_8a99760c9b0b4ee1a59e";
export const url=new URL("../icons/cloud-fog.svg?v=ec4f351e891dacbb2b585e46e5e26e506ce759b1cb126f3660d4788f9fa3997f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
