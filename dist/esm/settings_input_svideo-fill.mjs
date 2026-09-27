export const name="settings_input_svideo-fill";
export const id="dl_51f90edbbaea7ab6c13a";
export const url=new URL("../icons/settings_input_svideo-fill.svg?v=406ebbcc5a815b0792c9bb4dbc3774ffc56e8c81e98185576795b2db46a7461b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
