export const name="auto_stories_off";
export const id="dl_675afa550c3c9c164a8b";
export const url=new URL("../icons/auto_stories_off.svg?v=3e3349c3e793abc8aca8ce3d9b80274c13a2ca0b5eec920595d7f924acc17b19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
