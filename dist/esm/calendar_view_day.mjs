export const name="calendar_view_day";
export const id="dl_154851870e7c4f1ca387";
export const url=new URL("../icons/C/calendar_view_day.svg?v=afed39df29c29220bd933ea4792527f39cecd63cf81b358ef6e5d82e9297e409",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
