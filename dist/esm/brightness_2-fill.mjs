export const name="brightness_2-fill";
export const id="dl_84eb01488cab10dd2e27";
export const url=new URL("../icons/brightness_2-fill.svg?v=c812c95ea3190b03c9b6313d852fe515b1d3de87387dca813bc7ebdd34130006",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
