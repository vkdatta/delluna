export const name="health_cross-fill";
export const id="dl_07ffd0095bf07298dc43";
export const url=new URL("../icons/health_cross-fill.svg?v=755e23a59726b64aac54f1dd01e5eb7db327c012a821ef7f431a7413eae5d083",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
