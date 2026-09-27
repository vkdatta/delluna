export const name="exit_to_app-fill";
export const id="dl_8ebff06d25ed15219b6c";
export const url=new URL("../icons/exit_to_app-fill.svg?v=e5e4817c75e3d37f8d8d106bf677d8fd5c47003400fd20b42a042c0e6005e587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
