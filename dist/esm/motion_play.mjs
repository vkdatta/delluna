export const name="motion_play";
export const id="dl_363f6c15f4edaa779429";
export const url=new URL("../icons/motion_play.svg?v=ea496a34459b7e0e03a8e0652157307987f82972bde929d599926f9218afa67d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
