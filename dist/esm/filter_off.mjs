export const name="filter_off";
export const id="dl_65a395e54cc3d21066b5";
export const url=new URL("../icons/filter_off.svg?v=93d6baf852cd8d8d7a7e4787e6164f29b15e13e4a202446418a550b5c24bb16e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
