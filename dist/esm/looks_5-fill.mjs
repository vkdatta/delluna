export const name="looks_5-fill";
export const id="dl_db89cd1e873aa107544e";
export const url=new URL("../icons/looks_5-fill.svg?v=7ce548b23837cae9d70209a848f6b1e15578c5c6e02dbbe55a3474c8a95aeb52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
