export const name="format_paint_off";
export const id="dl_19c1772411a14196700a";
export const url=new URL("../icons/format_paint_off.svg?v=cae8a915d6e502eb4b42efb763256636000071b91c8e8612fe1e28dfdd8e0cf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
