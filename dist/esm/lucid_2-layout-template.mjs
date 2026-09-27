export const name="lucid_2-layout-template";
export const id="dl_a402c8cd3fc84707a916";
export const url=new URL("../icons/lucid_2-layout-template.svg?v=41579faa295e7e1ab4869854f94132c2ec720700498e175e124f099e0dada254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
