export const name="briefcase_meal-fill";
export const id="dl_48ac3713e9934dccaf6b";
export const url=new URL("../icons/briefcase_meal-fill.svg?v=fa4a5a3a5ea9bbf5f870ccf2f6f52cc8ef15b2ea105ed8072ebd2142747ed005",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
