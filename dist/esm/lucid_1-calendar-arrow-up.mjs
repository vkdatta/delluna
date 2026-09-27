export const name="lucid_1-calendar-arrow-up";
export const id="dl_f93406c9db864f30ae18";
export const url=new URL("../icons/lucid_1-calendar-arrow-up.svg?v=2311a197291cf43ca4b0fb6eafd02760608267613258d245d96152cc5b2dd02c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
