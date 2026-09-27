export const name="person_2-fill";
export const id="dl_6a10cae0d5d4aacb2cb2";
export const url=new URL("../icons/person_2-fill.svg?v=8f86d8179fde10077e646ae199219a2a8f8516116d6909f5d43581b71b3aadf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
