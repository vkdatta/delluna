export const name="arrow_or_edge";
export const id="dl_6e7dc1cd1b40d7895e01";
export const url=new URL("../icons/arrow_or_edge.svg?v=85e2e3ff791aeddd6e827e390ff21e954523ae0f48ce16d0ecf8a4d2986fff96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
