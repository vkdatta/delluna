export const name="fast-forward-circle-light";
export const id="dl_0fb6cd41ec564eefad39";
export const url=new URL("../icons/fast-forward-circle-light.svg?v=47a803b6ac1b82ddb582435257e32686abcb9d7578777055b511b50fdc535923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
