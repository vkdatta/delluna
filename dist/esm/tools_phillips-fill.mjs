export const name="tools_phillips-fill";
export const id="dl_95a6cd56a2b6e590d99b";
export const url=new URL("../icons/tools_phillips-fill.svg?v=a330346f0d6a9c3a4ad9649deb31f57c344c473e275356a811c64fa2716386c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
