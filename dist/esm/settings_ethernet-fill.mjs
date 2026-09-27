export const name="settings_ethernet-fill";
export const id="dl_58691bb24b8205f50bb2";
export const url=new URL("../icons/settings_ethernet-fill.svg?v=4717b40ef231e38f57a8e362d4453ef87c757e92629f7d137d9d6bbc67329273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
