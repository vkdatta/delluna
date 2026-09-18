export const name="add_ad-fill";
export const id="dl_a31cb35f3bed4fd4b905";
export const url=new URL("../icons/add_ad-fill.svg?v=4c80b01d1a1b761501bd38f8cc70cb224d032325dbc06419eaa2a6326251614a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
