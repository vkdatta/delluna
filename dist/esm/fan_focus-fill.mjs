export const name="fan_focus-fill";
export const id="dl_c61f5d4b06f97ec0675d";
export const url=new URL("../icons/fan_focus-fill.svg?v=70c888beb9de7e149720a7ceb029c688c0dd0c2069139563dfc7548c559a42db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
