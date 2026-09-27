export const name="lucid_2-earth-lock";
export const id="dl_69f5703304dd4065979b";
export const url=new URL("../icons/lucid_2-earth-lock.svg?v=66efc3625763040b9db6f730aa6e1a6859b963ca3ade2f502d385315fdcd2934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
