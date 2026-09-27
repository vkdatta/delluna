export const name="groups_3";
export const id="dl_a7dbc129a5e13895f519";
export const url=new URL("../icons/groups_3.svg?v=ca4874d9a90409299ab28fd0bf4f7433d6ba8faa91fe0c11b81b6602620433a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
