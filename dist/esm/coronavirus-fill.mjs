export const name="coronavirus-fill";
export const id="dl_86d2b659af3722360274";
export const url=new URL("../icons/coronavirus-fill.svg?v=e75eda7769ea3707acb0bb2ed61f39b367382f2dacd6762239db1b50e122dbdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
