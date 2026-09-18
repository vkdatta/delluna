export const name="travel_luggage_and_bags";
export const id="dl_ec0f4a85111047f6ac50";
export const url=new URL("../icons/T/travel_luggage_and_bags.svg?v=43577d70063f0a3edb55bc86ed6e6a22fd1bd45dfb4b547f600b5d97ba90a583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
