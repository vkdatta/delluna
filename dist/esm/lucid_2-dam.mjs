export const name="lucid_2-dam";
export const id="dl_aa250b9f274e4fba82b9";
export const url=new URL("../icons/lucid_2-dam.svg?v=34589780b9055f7465b66476c566c4854291f08da9c9bdffdf4f2a050e0c2ddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
