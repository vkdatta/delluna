export const name="skip_previous-fill";
export const id="dl_dd0784fc500d296cddc7";
export const url=new URL("../icons/skip_previous-fill.svg?v=8a339b93953a2509a07ecf5d86b4cb6b8d3fa366e8358204af7fb27f9fd3e6ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
