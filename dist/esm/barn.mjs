export const name="barn";
export const id="dl_e32ce97ba51641f69789";
export const url=new URL("../icons/barn.svg?v=2a24bedbe0e4fe7c150c3a318ddb19eb9922ad22a640dc8bc45ed70fa52436f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
