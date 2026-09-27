export const name="lucid_1-calendar-arrow-up";
export const id="dl_f93406c9db864f30ae18";
export const url=new URL("../icons/lucid_1-calendar-arrow-up.svg?v=94dc91a04ae6d922bb14f29a8ecdfe4e698ebfc18be424778a0874711472dc89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
