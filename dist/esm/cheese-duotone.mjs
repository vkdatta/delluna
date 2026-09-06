export const name="cheese-duotone";
export const id="dl_a411837c83124b11b3ba";
export const url=new URL("../icons/cheese-duotone.svg?v=e8f498baeba1bdf36538b0a448b98b6bd157fe438120b9dba51499db3c0ebc4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
