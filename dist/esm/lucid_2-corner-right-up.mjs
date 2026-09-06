export const name="lucid_2-corner-right-up";
export const id="dl_435112906d81472690de";
export const url=new URL("../icons/lucid_2-corner-right-up.svg?v=54c9a4d0777c8aa3560bff204e004b4dfeeeb845fc72e495aa106053c708ba46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
