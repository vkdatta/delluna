export const name="snowboarding";
export const id="dl_1efc786280d48762b0b3";
export const url=new URL("../icons/snowboarding.svg?v=1e0a8b52c9f8db563755b64851ef5acada80ca062386a1478fdacee5c7290256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
