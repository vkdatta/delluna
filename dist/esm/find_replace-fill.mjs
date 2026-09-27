export const name="find_replace-fill";
export const id="dl_95880e0f94cc23314ddd";
export const url=new URL("../icons/find_replace-fill.svg?v=97db8ad3694829e42d6b289e153a77632cccadca504c8203a6fec9b3339bed92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
