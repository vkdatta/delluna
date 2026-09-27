export const name="lucid_1-chevrons-left";
export const id="dl_bb40b34ea33544219b02";
export const url=new URL("../icons/lucid_1-chevrons-left.svg?v=3a0b5408ec883c806a30b00196666aa83ac8e916816bb98de373d3511cc2fbb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
