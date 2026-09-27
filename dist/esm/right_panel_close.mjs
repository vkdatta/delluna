export const name="right_panel_close";
export const id="dl_058cf455a9a355e0b728";
export const url=new URL("../icons/right_panel_close.svg?v=f6850af4435d7d63d604e972cd2a81cf539c6206ed5ae9f0977191722bb1065f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
