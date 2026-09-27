export const name="align_start-fill";
export const id="dl_cbf5d2e249bcebc2b77c";
export const url=new URL("../icons/align_start-fill.svg?v=1d19d24b6d5100256d72d43a829815fc5463af8074ab970e3df55d3858cbc255",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
