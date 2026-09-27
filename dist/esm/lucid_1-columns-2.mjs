export const name="lucid_1-columns-2";
export const id="dl_aced6b45ac51406da18d";
export const url=new URL("../icons/lucid_1-columns-2.svg?v=3c43092d304db38a57b1fba8ec6527c74814cf6c7075b0c2a2596ae31f150812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
