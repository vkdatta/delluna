export const name="pages";
export const id="dl_dd0179a05fac781fb0ad";
export const url=new URL("../icons/pages.svg?v=276354168ed335ed4e31ca000fcdc19f2055ef736d1796774c0c83e99f4c6d4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
