export const name="charging-station-bold";
export const id="dl_71070ee7e4574b23ba21";
export const url=new URL("../icons/charging-station-bold.svg?v=d013e9a62eac30506490c65128a08b5a47feb9285e22eb871a40b532a41b039b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
