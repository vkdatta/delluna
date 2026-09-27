export const name="move_selection_left";
export const id="dl_e4586d5661beb06c2738";
export const url=new URL("../icons/move_selection_left.svg?v=08f268774d397e641375cbb82fe9ef6d4dff547803c01cbe887d8b01f71d1692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
