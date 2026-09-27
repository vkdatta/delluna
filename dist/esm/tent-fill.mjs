export const name="tent-fill";
export const id="dl_db8fe5fc2012e6bbbc8b";
export const url=new URL("../icons/tent-fill.svg?v=e8e6631f9de38953ea8196bb4b4221c3e1187a9d6b1f50b86004a814bf0cd558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
