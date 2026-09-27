export const name="schema-fill";
export const id="dl_be4dd70813d3cdd72bf1";
export const url=new URL("../icons/schema-fill.svg?v=f9d76e1a89be80279c7f7db31b49e4d3a0c99be7d1a4923d1347687d41492b71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
