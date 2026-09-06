export const name="ranking-fill";
export const id="dl_46dadd7549204995956a";
export const url=new URL("../icons/ranking-fill.svg?v=b575cd51a0b72302dcfca0ccb66c20813a3370eb0b8ce8efc62abd408580dd64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
