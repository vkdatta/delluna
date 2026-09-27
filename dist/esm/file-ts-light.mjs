export const name="file-ts-light";
export const id="dl_62360c9f907d40dfaef7";
export const url=new URL("../icons/file-ts-light.svg?v=07a9ef27d2f42e15925f6309fa05c290025da526a9aa55a720a4254f178876d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
