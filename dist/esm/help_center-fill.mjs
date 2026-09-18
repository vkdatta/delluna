export const name="help_center-fill";
export const id="dl_c7ce98af694844f9806b";
export const url=new URL("../icons/help_center-fill.svg?v=7cba71013e690548086adfab56561d90cff03712ffc254541b52685598382c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
