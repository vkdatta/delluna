export const name="intersection-light";
export const id="dl_f738003e190a41c5af09";
export const url=new URL("../icons/intersection-light.svg?v=6c6a8c6e395da5727fecd8b57f73c33d81216b4c55347780e1c674aa3264a430",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
