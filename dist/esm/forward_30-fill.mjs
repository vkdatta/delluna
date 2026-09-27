export const name="forward_30-fill";
export const id="dl_e3d42c0045ed806207c0";
export const url=new URL("../icons/forward_30-fill.svg?v=4cb456339d2e07df9a7d78958415ceef3dcb661966193185b3f2eb9093ba70d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
