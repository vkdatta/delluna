export const name="quickreply-fill";
export const id="dl_d5c0a6b8285cfe40c136";
export const url=new URL("../icons/quickreply-fill.svg?v=734e4942a7b0a053f765bea7f9a5e2abf910f0d04cb9361baeac3f92125a5ec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
