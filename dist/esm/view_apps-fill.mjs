export const name="view_apps-fill";
export const id="dl_131d8bd85775e4973965";
export const url=new URL("../icons/view_apps-fill.svg?v=cdb180ac20c638be73b508b2ef74f89ace444cc0336acd92baf1af51483de292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
