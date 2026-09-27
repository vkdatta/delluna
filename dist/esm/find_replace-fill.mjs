export const name="find_replace-fill";
export const id="dl_43c09ec371239dbfcefd";
export const url=new URL("../icons/find_replace-fill.svg?v=0bf4f69031af23ef50a16cd5ee1a7dea6a39d552eab61c9c3e55f8183d88d7df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
