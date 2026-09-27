export const name="select_expand";
export const id="dl_c848b7e979cc9292d088";
export const url=new URL("../icons/select_expand.svg?v=0e4fff3a3770435eeffa798c3c703790f3c9c520f1746e3bcba176df1d82cb06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
