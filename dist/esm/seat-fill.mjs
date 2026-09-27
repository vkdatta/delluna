export const name="seat-fill";
export const id="dl_f477e20ed247ab10dbe8";
export const url=new URL("../icons/seat-fill.svg?v=4f1237670929c77391278fd3f1c86142403d7a58ff1bef5e4bf49524cf4de087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
