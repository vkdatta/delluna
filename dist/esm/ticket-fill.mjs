export const name="ticket-fill";
export const id="dl_ba932c0080624fb220e9";
export const url=new URL("../icons/ticket-fill.svg?v=382bcb6bc5e81e6ea704088d22433fd62b17daebbed746e4195af76fe8b5eb45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
