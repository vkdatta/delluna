export const name="union-bold";
export const id="dl_d2684ef507a8477da504";
export const url=new URL("../icons/U/union-bold.svg?v=f7351b2aa33a2f0bbc582d6bc084316f48f82db3206b0c59c7dcc349ccf8c861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
