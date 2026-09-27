export const name="confirmation_number";
export const id="dl_0c57a492437ca66f649f";
export const url=new URL("../icons/confirmation_number.svg?v=4d31eb4e72d3cc00565fc8ebb474d444de0e390c755cbeefe22883d06342534c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
