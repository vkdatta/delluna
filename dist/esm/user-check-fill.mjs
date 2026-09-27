export const name="user-check-fill";
export const id="dl_055bdd0ae850d9986ecf";
export const url=new URL("../icons/user-check-fill.svg?v=99b7c248481a10b87b17b93b018cf7089d3113ba460b7536d7223ef2d3954915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
