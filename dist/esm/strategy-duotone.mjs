export const name="strategy-duotone";
export const id="dl_cb8b3475bd10fb12b22c";
export const url=new URL("../icons/strategy-duotone.svg?v=383c55a19c3eaf80fb46f13089b16c6aaf1a51197c121c839276c44dba601711",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
