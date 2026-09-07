export const name="tipi-bold";
export const id="dl_bdaff78e8b764f4a995a";
export const url=new URL("../icons/T/tipi-bold.svg?v=9abd90de48f1b24b0776d5ee9b6af962c1cc44bbce0394ed2ac14ab5303dbcbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
