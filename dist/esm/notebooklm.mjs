export const name="notebooklm";
export const id="dl_39d2d69595a0b824bc56";
export const url=new URL("../icons/notebooklm.svg?v=817d6859e64ad86e53b9bc9755963afdf218ff7613902823f1ad9898f8b9a2a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
