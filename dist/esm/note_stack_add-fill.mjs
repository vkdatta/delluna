export const name="note_stack_add-fill";
export const id="dl_3bb93c8d4618a5250ed4";
export const url=new URL("../icons/note_stack_add-fill.svg?v=797e4e6e1d4f9ed6a9d4a31bd0739ad9cf13e906fb6813de31dd214eed46bf18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
