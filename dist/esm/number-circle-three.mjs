export const name="number-circle-three";
export const id="dl_6240562f22534a45a485";
export const url=new URL("../icons/number-circle-three.svg?v=e0351bbeaff3336201cf1c273a41586a4b41b19388fe35db0e2baae8bd19a435",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
