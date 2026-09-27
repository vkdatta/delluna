export const name="filter_list-fill";
export const id="dl_f4ace99e9ad5b3e94a81";
export const url=new URL("../icons/filter_list-fill.svg?v=95963fc73680393330bb47f1fee5d98b4fc227b934ed2f77c1ca1a60ca5e9e71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
