export const name="travel_luggage_and_bags-fill";
export const id="dl_853f5b3a4e94c469213f";
export const url=new URL("../icons/travel_luggage_and_bags-fill.svg?v=2e55318053944a7579b891fdcb2c4042cd3a78da007ba71eefef211a4f58c9c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
