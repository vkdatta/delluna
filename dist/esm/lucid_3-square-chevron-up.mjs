export const name="lucid_3-square-chevron-up";
export const id="dl_e88bdd2bcd4546febbf8";
export const url=new URL("../icons/lucid_3-square-chevron-up.svg?v=187b32afe7078cbea70e8bac994b898f277d1e6ef2889cde781b3ac32bd2ca3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
