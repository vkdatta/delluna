export const name="lock-open-fill";
export const id="dl_cb5a21f1cffb4aeababa";
export const url=new URL("../icons/lock-open-fill.svg?v=ad9cd775f0013b550c2094d37d5ee0ef66f495e88e3a7031c6e116f880ced779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
