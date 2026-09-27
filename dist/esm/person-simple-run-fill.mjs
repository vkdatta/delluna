export const name="person-simple-run-fill";
export const id="dl_e400ae051fee4e56a64b";
export const url=new URL("../icons/person-simple-run-fill.svg?v=6c5306556e990e2c5110b121cb3b6764dedf3a14a3ca0232a7f7cf698737c17e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
