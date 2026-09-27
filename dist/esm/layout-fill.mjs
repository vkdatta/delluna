export const name="layout-fill";
export const id="dl_9e167180049c42978fc5";
export const url=new URL("../icons/layout-fill.svg?v=a6fcc5952dabe29c8e72d7fe944730c7d08b706b1ae80e1b2f070b31c193e466",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
