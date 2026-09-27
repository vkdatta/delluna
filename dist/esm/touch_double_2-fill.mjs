export const name="touch_double_2-fill";
export const id="dl_4a53e45cd6b8acb75188";
export const url=new URL("../icons/touch_double_2-fill.svg?v=beb6eff765b04901d3d588db37c60654540f9ab6932b4a79d38624fb24c2019b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
