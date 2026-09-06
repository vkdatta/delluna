export const name="pencil-slash-duotone";
export const id="dl_01a242d451b446b9a64a";
export const url=new URL("../icons/pencil-slash-duotone.svg?v=6719007a56bf4049d89b6cc0eadfe481876ac58bce660e8f040d2905994a12a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
