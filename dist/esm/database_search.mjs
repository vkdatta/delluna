export const name="database_search";
export const id="dl_b98f455749d745acb2c4";
export const url=new URL("../icons/D/database_search.svg?v=3d5a038b53fcdad979a447d13db4b631697a43fc147c654917ec9989263bc43d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
