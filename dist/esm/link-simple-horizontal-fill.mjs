export const name="link-simple-horizontal-fill";
export const id="dl_62fcb9df65d6423eb2c7";
export const url=new URL("../icons/link-simple-horizontal-fill.svg?v=251befb94c1f926d5ebd9b894f09d24faf2dca5286f5363423cf000f45fadb63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
