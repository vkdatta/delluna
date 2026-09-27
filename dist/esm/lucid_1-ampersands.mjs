export const name="lucid_1-ampersands";
export const id="dl_be004c3cac68420bac54";
export const url=new URL("../icons/lucid_1-ampersands.svg?v=2e542a5c14484670d739a910741a39dd6fac521398af05b1afc9db7ad68a2614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
