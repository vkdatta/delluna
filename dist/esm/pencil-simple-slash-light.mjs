export const name="pencil-simple-slash-light";
export const id="dl_198e5cf7013e47c3ad37";
export const url=new URL("../icons/pencil-simple-slash-light.svg?v=fee2f5e393809ec4881ccdc6ecbaf80c1b012e39b65e0ae25071dc05c1e2b67d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
