export const name="lucid_3-speaker";
export const id="dl_b5bba228384846679c0f";
export const url=new URL("../icons/lucid_3-speaker.svg?v=98a488955ade7c8b51d477fe01adbab52f5a36605734013f9d69f325a980ceb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
