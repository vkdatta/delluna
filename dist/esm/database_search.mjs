export const name="database_search";
export const id="dl_0c6d2463c49d36141062";
export const url=new URL("../icons/database_search.svg?v=3d5a038b53fcdad979a447d13db4b631697a43fc147c654917ec9989263bc43d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
