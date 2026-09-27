export const name="score-fill";
export const id="dl_ef0aff02bf09ec80b67b";
export const url=new URL("../icons/score-fill.svg?v=bcda7eb808079530ec7cbab4b458aa4af52f13f59ddb48f73cdb3bbcb1c8eb86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
