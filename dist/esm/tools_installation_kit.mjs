export const name="tools_installation_kit";
export const id="dl_e0c90fbe8774948a3e90";
export const url=new URL("../icons/tools_installation_kit.svg?v=ffc58b5ac10bdaf9b4c5a45ae11ee38946f9602b54869204901705e7f569f5de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
