export const name="person-simple-run-duotone";
export const id="dl_9be83f8844644a9fb176";
export const url=new URL("../icons/person-simple-run-duotone.svg?v=c4e1e2e028cdfa2772cb6a46a526ba5c305e4e8ac6a74f5d50f90be2aeb681c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
