export const name="microsoft-teams-logo-duotone";
export const id="dl_a5dfdc00a59045288165";
export const url=new URL("../icons/microsoft-teams-logo-duotone.svg?v=f96cc31fe5e0c2e5a8709edecf3febff31fd300601b21013f8e383a9a839fa96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
