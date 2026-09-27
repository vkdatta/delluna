export const name="13mp-fill";
export const id="dl_0133f23c71a74722278a";
export const url=new URL("../icons/13mp-fill.svg?v=21e8c9fd1eda4164880b9bbae87139c38ef9ffb77fca5f70b148a70153d8c7d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
