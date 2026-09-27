export const name="variable_remove-fill";
export const id="dl_ecaf0e3f9638894f59d6";
export const url=new URL("../icons/variable_remove-fill.svg?v=2a918aa0e3758124d780bdc80aca8b151a24de124ca0cc28e646891930c4213a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
