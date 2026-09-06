export const name="file-sql-thin";
export const id="dl_b02181ea0ec64516bb06";
export const url=new URL("../icons/file-sql-thin.svg?v=5d40413485f6e68f4cdbdfb341ff37ed1c8e7910bc82be53e7e40a429e73fa95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
