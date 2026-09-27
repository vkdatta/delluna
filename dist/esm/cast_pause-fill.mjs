export const name="cast_pause-fill";
export const id="dl_26f060df0878baaa972d";
export const url=new URL("../icons/cast_pause-fill.svg?v=92a7778939da0cf78dd979947b517a36f6bc01f0e5ff508d8d008a5e06559e1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
