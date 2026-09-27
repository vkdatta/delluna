export const name="select_check_box-fill";
export const id="dl_ce1bf204bd8c28923f38";
export const url=new URL("../icons/select_check_box-fill.svg?v=bc8caf4b49b8e3b319e0af68844401cc3159833aab5efab407ff890fe498b18a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
