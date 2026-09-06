export const name="presentation-chart-fill";
export const id="dl_4340f56ad0cf4bb59eff";
export const url=new URL("../icons/presentation-chart-fill.svg?v=bf11a77aede260982281758bbb80fd7ce507c99dfa16afcd0aba89bbf9385ac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
