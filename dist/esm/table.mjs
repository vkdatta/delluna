export const name="table";
export const id="dl_b44446d88fd5060f158d";
export const url=new URL("../icons/table.svg?v=0c61ebf421ed721c61f451a62bce01f4cc40e79cc1dd515aab4c405e8a1245cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
