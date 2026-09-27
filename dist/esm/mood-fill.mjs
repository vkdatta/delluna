export const name="mood-fill";
export const id="dl_04ec345ff894c71251a8";
export const url=new URL("../icons/mood-fill.svg?v=3aecf082aaf0f7e90fe954fa7aa9f9418680ecf78f675631202046d2bd30a376",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
