export const name="vacuum_2_on";
export const id="dl_56babbd2033e808d77a7";
export const url=new URL("../icons/vacuum_2_on.svg?v=2aa062012953e905948567bd4eba2b33e48c3c245f7e5561fac50519028a00fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
