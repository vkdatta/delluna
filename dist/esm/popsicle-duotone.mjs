export const name="popsicle-duotone";
export const id="dl_f6823ab6c38a434e9612";
export const url=new URL("../icons/popsicle-duotone.svg?v=2bf5874e8b37f8b5dcda5fb81133bc0e898936ffe738772c87d1b82513507ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
