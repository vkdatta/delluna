export const name="downloading-fill";
export const id="dl_a3ece713ce7557826a47";
export const url=new URL("../icons/downloading-fill.svg?v=18c0dcaaffd1fd40583b0ad282b100de384acbb03d45d5468fb684b6054b8352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
