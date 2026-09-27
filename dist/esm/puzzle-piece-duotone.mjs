export const name="puzzle-piece-duotone";
export const id="dl_8734f6033d61462996c9";
export const url=new URL("../icons/puzzle-piece-duotone.svg?v=34da63774b50476a6a1a1ecb4f35baf9934b2a2b1dd7c0ed55450eeb7043932c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
