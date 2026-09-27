export const name="night_sight_auto-fill";
export const id="dl_bbd51f6dfc274bc401e4";
export const url=new URL("../icons/night_sight_auto-fill.svg?v=71007c8ae97f2700318c9c1469c968ec363a117d473fa53fb7b2e7ebf14d41cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
