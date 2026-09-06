export const name="lucid_3-option";
export const id="dl_f249ae7d1c574c8fb6d1";
export const url=new URL("../icons/lucid_3-option.svg?v=b6f732709de750abd667a665e5fba68e6cb1d8a98e6847c7db001e709677ae13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
