export const name="calendar-star-light";
export const id="dl_77f72ef13d80498d81cb";
export const url=new URL("../icons/calendar-star-light.svg?v=60828bc73787f8113c941c1f1c051d3605b4e5d886e2562b64d4458db4ecb1cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
