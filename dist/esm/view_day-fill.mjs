export const name="view_day-fill";
export const id="dl_7faaf736d50dd1bad757";
export const url=new URL("../icons/view_day-fill.svg?v=44d005a665bf60ca4ae17fdc703979915b38867e4e2ac4baa7710fd8dc1fd781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
