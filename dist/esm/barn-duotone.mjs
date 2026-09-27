export const name="barn-duotone";
export const id="dl_cd18ef14b6164dc384fa";
export const url=new URL("../icons/barn-duotone.svg?v=a14f76cbc8bf69e3455986f2eb3ba8cbb8c50fd9624f8ce7c9d94171396bca7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
