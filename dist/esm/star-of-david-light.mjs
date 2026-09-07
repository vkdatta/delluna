export const name="star-of-david-light";
export const id="dl_46ed4904f881467ca813";
export const url=new URL("../icons/S/star-of-david-light.svg?v=e4f0ffde40e746b45ce9d6bc1c4b036c73912ddfbbed625352668b8640e8dcd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
