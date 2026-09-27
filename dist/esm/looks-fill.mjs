export const name="looks-fill";
export const id="dl_fe6f7468099c5c365cec";
export const url=new URL("../icons/looks-fill.svg?v=d182f519f03505f9f366a7736567fe1440bf0de83d3e4dd78935d8349528024b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
