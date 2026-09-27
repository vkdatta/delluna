export const name="beer-stein";
export const id="dl_e31c5fc424c4450bbebb";
export const url=new URL("../icons/beer-stein.svg?v=b62cd2f7edd12f732e67b817ffb612d267dd7a431586344f9040172038cb382b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
