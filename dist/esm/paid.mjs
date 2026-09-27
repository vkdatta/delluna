export const name="paid";
export const id="dl_13313692cfbca8654092";
export const url=new URL("../icons/paid.svg?v=91e8c4c3551c9e62adc4b345eb06af020894ee1f4d92fb7a1ad3107d04177eed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
