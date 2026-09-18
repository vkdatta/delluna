export const name="cleaning_bucket";
export const id="dl_943a70c113814e1baf7e";
export const url=new URL("../icons/cleaning_bucket.svg?v=ffa687d5157cd1b6957c1eddbaa1ad89cd404262cfc592dc149d7bc4e0c5c77c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
