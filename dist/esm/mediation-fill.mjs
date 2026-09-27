export const name="mediation-fill";
export const id="dl_d741549d67994aaf5913";
export const url=new URL("../icons/mediation-fill.svg?v=9ef8e362d80b7f0851abb16e2bad8153c59fa4d2fcc7c6cbb3386feb96f67258",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
