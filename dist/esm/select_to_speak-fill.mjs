export const name="select_to_speak-fill";
export const id="dl_1a9cec06e57a47fba015";
export const url=new URL("../icons/S/select_to_speak-fill.svg?v=8a862d17272a0852fbe3dca391d6b0efe7beee3655b662ff8b7be92572ba3c66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
