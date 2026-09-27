export const name="where_to_vote";
export const id="dl_9d8590f8317f877305fb";
export const url=new URL("../icons/where_to_vote.svg?v=03f85d1ea1389f555895ce23ea9ef8febd7d04c1b77c0087bd1366d7431e3771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
