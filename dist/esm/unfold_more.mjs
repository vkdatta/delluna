export const name="unfold_more";
export const id="dl_58a8497701c7b980e154";
export const url=new URL("../icons/unfold_more.svg?v=1d3b3790c21c4afdf7ea8210f2e291743c9700ac47f808f8f27e5dba5acdfca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
