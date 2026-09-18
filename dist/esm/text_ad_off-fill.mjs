export const name="text_ad_off-fill";
export const id="dl_91d2315c27224574b618";
export const url=new URL("../icons/text_ad_off-fill.svg?v=8d0fd42bdba26550d74ef5f97ebf1e4062c3937913bc23116d54076884225e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
