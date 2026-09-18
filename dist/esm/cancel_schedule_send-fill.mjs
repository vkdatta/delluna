export const name="cancel_schedule_send-fill";
export const id="dl_a540c950752d45a78d31";
export const url=new URL("../icons/cancel_schedule_send-fill.svg?v=1ac67fcdf85f44a7961ee59087505dbc60b06572f98e2937be0387615c1cb67e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
