export const name="rule_folder";
export const id="dl_820e3e51ccacf6b1e296";
export const url=new URL("../icons/rule_folder.svg?v=24e813bab2d7b2a084576aee7f30f0afadf16384c8464eb674a91544789a9e06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
