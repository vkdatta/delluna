export const name="towel-thin";
export const id="dl_8235b89b479d4788878b";
export const url=new URL("../icons/T/towel-thin.svg?v=d965c5c3bd47fd03673c5148d1c8dcc128ce05df5a843f5831152eec8d5f53b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
