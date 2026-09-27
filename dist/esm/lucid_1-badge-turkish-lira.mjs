export const name="lucid_1-badge-turkish-lira";
export const id="dl_e5298cca1b5c42aa834e";
export const url=new URL("../icons/lucid_1-badge-turkish-lira.svg?v=fcf1c5bdc7e58ef4709300e123efe841592abfd6b9db9e415b036c11ac5706e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
