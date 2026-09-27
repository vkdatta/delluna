export const name="no_drinks";
export const id="dl_4191115913eccbb0ebcf";
export const url=new URL("../icons/no_drinks.svg?v=4a049ef111e9406b6f893e483b25fb31700b1a08b1a3dfa05889c0bc0989bd75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
