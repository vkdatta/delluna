export const name="manage_search-fill";
export const id="dl_47aa97e465a475145dae";
export const url=new URL("../icons/manage_search-fill.svg?v=43efe0c6ce21bb6b1df0152b405b0d20a4f52e8fa794fe8c0fdc64758de8d8db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
