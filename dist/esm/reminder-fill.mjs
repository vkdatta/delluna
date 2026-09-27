export const name="reminder-fill";
export const id="dl_c8e099d9bebc51b35e52";
export const url=new URL("../icons/reminder-fill.svg?v=899004655e6e9c00b53139b161cee4df5478242e58b02589dbf7057bac92f270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
