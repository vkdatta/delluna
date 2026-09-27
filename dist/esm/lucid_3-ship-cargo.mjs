export const name="lucid_3-ship-cargo";
export const id="dl_e6bfbdb3fc54453d884f";
export const url=new URL("../icons/lucid_3-ship-cargo.svg?v=930f7e82aa6d8bef088da17623e79eddea2c4d121c6d4eda991c2400ad16f696",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
