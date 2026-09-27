export const name="lucid_1-badge-question-mark";
export const id="dl_6569cf4753864b618931";
export const url=new URL("../icons/lucid_1-badge-question-mark.svg?v=623a6c1f61779b1e82072848d2c877778b9364e7db503608e06d2fa7339a8ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
