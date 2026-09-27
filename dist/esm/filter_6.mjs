export const name="filter_6";
export const id="dl_dd1c7a2d0e06be69617d";
export const url=new URL("../icons/filter_6.svg?v=8efa2ca220e4b7fc0871b3a97b25df3024d6d02e0c62b7d654e53ce05fa2e012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
