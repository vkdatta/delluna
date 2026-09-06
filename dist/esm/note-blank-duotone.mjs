export const name="note-blank-duotone";
export const id="dl_b5d5ec312d6449119b25";
export const url=new URL("../icons/note-blank-duotone.svg?v=4f155cc5f7d8688ac245fbb00de29d40450c8c27b09ddf178d114eeacf87444f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
