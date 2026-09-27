export const name="travel_luggage_and_bags";
export const id="dl_11a6e38b76e5380fc9ea";
export const url=new URL("../icons/travel_luggage_and_bags.svg?v=ecb36afac4eb9e3f5d4d5e8ddbca01a4f6efba3ce56d3d3f91f7cf1b5fbb4fa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
