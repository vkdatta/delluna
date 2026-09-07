export const name="detective-fill";
export const id="dl_d8de674b6c9d47a2af8f";
export const url=new URL("../icons/detective-fill.svg?v=445c7c739517e81f87624196217d25debb804ab28e28bf05a46fe18634cb55b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
