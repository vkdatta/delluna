export const name="file-tsx-duotone";
export const id="dl_1bfd2c1e085f4c4d8eae";
export const url=new URL("../icons/file-tsx-duotone.svg?v=ebdfb44ee722328fbf272293021fde2345242669f91b80ff97f822a1331bc47a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
