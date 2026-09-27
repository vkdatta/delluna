export const name="lucid_3-refresh-cw-off";
export const id="dl_bb9fbb1d572044d7ad33";
export const url=new URL("../icons/lucid_3-refresh-cw-off.svg?v=5c625884b6cc1f90bbba686e52f1d1a39f98a3e2ac49881f15d3144035fffc81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
