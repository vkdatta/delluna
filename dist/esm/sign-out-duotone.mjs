export const name="sign-out-duotone";
export const id="dl_61e4321d1bf9fb24af3b";
export const url=new URL("../icons/sign-out-duotone.svg?v=9eea425986ebee64c43658b3ac63ed8d56c710d1a6f242ea5f12c58f9e8e87c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
