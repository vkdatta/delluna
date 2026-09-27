export const name="home_work";
export const id="dl_84999e10958e4a19060d";
export const url=new URL("../icons/home_work.svg?v=55a1827523b5639ea4cf9c5669efceefdf7347efb1fb2648877398038de31855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
