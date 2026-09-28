export const name="incomplete_circle-fill";
export const id="dl_dcab698831dc77f3c279";
export const url=new URL("../icons/incomplete_circle-fill.svg?v=3e5d08ad9da921e28942c8aba7350255215641c48818ccb29559d46691dc9278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
