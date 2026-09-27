export const name="laptop_chromebook-fill";
export const id="dl_4045e0eaab80d1e2b522";
export const url=new URL("../icons/laptop_chromebook-fill.svg?v=ff4140b1fc9e50141861be474ee37189bf201e53c4d46297586384fd4ac65aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
