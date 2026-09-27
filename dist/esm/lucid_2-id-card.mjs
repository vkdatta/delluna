export const name="lucid_2-id-card";
export const id="dl_9ffffb4d4be44ded8b7b";
export const url=new URL("../icons/lucid_2-id-card.svg?v=8c4ad490a1a6b5ec430d3980c57a9e7e43996369fbbe4331b6bd006bcbc11d15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
