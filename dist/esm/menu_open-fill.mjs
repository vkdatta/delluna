export const name="menu_open-fill";
export const id="dl_ff9884843a73054ed5f6";
export const url=new URL("../icons/menu_open-fill.svg?v=9bc8f93e5ecbf766dd0d7edee1cce9f5096253912326b92e84d6e3676fe6e02d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
