export const name="microsoft-teams-logo-duotone";
export const id="dl_a5dfdc00a59045288165";
export const url=new URL("../icons/microsoft-teams-logo-duotone.svg?v=4fc7ff597a19ad435a11343a582c5ec93fbd9e1f5ae148d502ba4cb7f2edfad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
