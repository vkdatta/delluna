export const name="columns-bold";
export const id="dl_3bed56803bfa435a8cc9";
export const url=new URL("../icons/columns-bold.svg?v=7cbe91a600ddb755229c653689ecf2af71310df65caab5e5cf0301c232ed3e43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
