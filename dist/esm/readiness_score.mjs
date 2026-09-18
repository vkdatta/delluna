export const name="readiness_score";
export const id="dl_e06ff54276454d2d9995";
export const url=new URL("../icons/readiness_score.svg?v=d3d21575653b3b667b9203ae20c114838e62958d18dee2329f535fe55a86f262",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
