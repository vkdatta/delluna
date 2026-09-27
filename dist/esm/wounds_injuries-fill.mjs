export const name="wounds_injuries-fill";
export const id="dl_0946551bb46ebe1a251b";
export const url=new URL("../icons/wounds_injuries-fill.svg?v=038943c2e48c072a92191e14940856b78ea75080f9eddee37c6c996995587839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
