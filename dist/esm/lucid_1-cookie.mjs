export const name="lucid_1-cookie";
export const id="dl_5427c4f147154ff5a781";
export const url=new URL("../icons/lucid_1-cookie.svg?v=906adf2a944bfa131d422de1c756efc5d7f8bbf7f1bd9c2eec60eb1f574b35cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
