export const name="collapse";
export const id="dl_deb04dfcfd42449e937a";
export const url=new URL("../icons/all_60_named_svgs/collapse.svg?v=e95b7cf67a9d3b0a6cc449008fa6c4f7ccdadb52f3b85cfa64fde89291dcf89a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
