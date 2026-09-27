export const name="chalkboard-fill";
export const id="dl_8fcfd7c269214d799542";
export const url=new URL("../icons/chalkboard-fill.svg?v=1c530bfcf6b3024544e9e8d9d149e4e0e7f73268f4ba9e4c5bd1d7d29534dbf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
