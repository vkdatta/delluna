export const name="tram";
export const id="dl_9de10115e73328650e88";
export const url=new URL("../icons/tram.svg?v=803f0de202d46469dc95bb948e8b371628f9ddf4f2781fd5450fac6675a54cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
