export const name="calendar-slash-light";
export const id="dl_2b237cde43324d0d9aae";
export const url=new URL("../icons/calendar-slash-light.svg?v=cfead87e7f15064159400b2bd13cb19d11e8c1e28cb1151f763b5d7423e32187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
