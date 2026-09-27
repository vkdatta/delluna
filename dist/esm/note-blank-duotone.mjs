export const name="note-blank-duotone";
export const id="dl_b5d5ec312d6449119b25";
export const url=new URL("../icons/note-blank-duotone.svg?v=252e42baf43b5fd372a75ed84db1903ff08c38121c1a8609eaed319f48441332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
