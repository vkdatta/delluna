export const name="keyboard_alt-fill";
export const id="dl_7377e1fd22234537b463";
export const url=new URL("../icons/keyboard_alt-fill.svg?v=ee254599e803edf4090292309a73fd399569d4da5577ef2e814b630ee3ff960c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
