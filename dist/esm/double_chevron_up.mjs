export const name="double_chevron_up";
export const id="dl_459ed3a69ef844649b6b";
export const url=new URL("../icons/all_60_named_svgs/double_chevron_up.svg?v=8aa90736ee66b9a42ee25f4e3a2e8c33e637340014b42b7634296643921cc034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
