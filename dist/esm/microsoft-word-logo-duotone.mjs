export const name="microsoft-word-logo-duotone";
export const id="dl_7af457df61544a22b98b";
export const url=new URL("../icons/microsoft-word-logo-duotone.svg?v=86d5dae998f13342302c92c8014a3c3212eaf906e3b43683b495824da76739a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
