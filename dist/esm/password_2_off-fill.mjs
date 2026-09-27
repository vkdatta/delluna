export const name="password_2_off-fill";
export const id="dl_e2807aeddc537b2b741e";
export const url=new URL("../icons/password_2_off-fill.svg?v=7b31bdd38ba0677c8ea65724366af4cf5755092821234feef208a10c5487ee79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
