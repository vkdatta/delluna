export const name="pepper-duotone";
export const id="dl_07d3dc51560547d69948";
export const url=new URL("../icons/pepper-duotone.svg?v=144e4f56563cdd3379e0a6b366defd65a533aaf2f956538d9acaca1920bad55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
