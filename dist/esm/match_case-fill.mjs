export const name="match_case-fill";
export const id="dl_a06832893294670fd0c2";
export const url=new URL("../icons/match_case-fill.svg?v=2b23ddd0784c3086b663dd600e93c7cca89d2be5f6c10a2864dd49cad7f8dba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
