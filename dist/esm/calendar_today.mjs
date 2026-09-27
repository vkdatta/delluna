export const name="calendar_today";
export const id="dl_fb97e6a89e7efd1beb0d";
export const url=new URL("../icons/calendar_today.svg?v=4bfaf78a91ff001392528e1a67c331db105267a13e6baba7c7d540a53247773c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
