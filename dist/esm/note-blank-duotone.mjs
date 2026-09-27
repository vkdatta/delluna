export const name="note-blank-duotone";
export const id="dl_b5d5ec312d6449119b25";
export const url=new URL("../icons/note-blank-duotone.svg?v=361bfc3ff02ab0ebbf1cd5e3c72021b17dc782a003e800de506a83cd57a33553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
