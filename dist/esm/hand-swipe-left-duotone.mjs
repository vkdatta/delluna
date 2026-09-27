export const name="hand-swipe-left-duotone";
export const id="dl_22db35def796445ca984";
export const url=new URL("../icons/hand-swipe-left-duotone.svg?v=92ce416667ed509f180d3f54e9c3b5e0b827af6337394ae69d72d844dbc5539b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
