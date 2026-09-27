export const name="car_tag";
export const id="dl_da9cebd9b69d2ff177fd";
export const url=new URL("../icons/car_tag.svg?v=15cfbe72d33828a5526b1a259c009c54163902615daa09cfee2e9a8a9691808d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
