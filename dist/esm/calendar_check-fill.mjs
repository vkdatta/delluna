export const name="calendar_check-fill";
export const id="dl_87180aeda702b8e68e42";
export const url=new URL("../icons/calendar_check-fill.svg?v=ded7c2698f3f7c23823912609d5e6f363d49d5861a13d7c048db390ce2dbda4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
