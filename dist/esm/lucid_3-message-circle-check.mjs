export const name="lucid_3-message-circle-check";
export const id="dl_e665fa9c10e843c8a8bd";
export const url=new URL("../icons/lucid_3-message-circle-check.svg?v=27093cad8964ebf4d05bed261503c6bf7f210061796f07f4465d881b5ee7f88e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
