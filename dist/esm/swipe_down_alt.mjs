export const name="swipe_down_alt";
export const id="dl_5fb76b56cdc32f3faa5e";
export const url=new URL("../icons/swipe_down_alt.svg?v=ff6e12f3bd0c7c35daa59ae7942155fb1bd56f3df5d149bafd646097fe87801f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
