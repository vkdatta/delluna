export const name="remove_moderator-fill";
export const id="dl_468f903925e5e8a569dc";
export const url=new URL("../icons/remove_moderator-fill.svg?v=33e87195eddb650e5dac2e0ccccefcadad18b7351c8bbf8f0d127eefe17c8b4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
