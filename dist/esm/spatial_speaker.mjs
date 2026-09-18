export const name="spatial_speaker";
export const id="dl_4d495d7b74294e6abf65";
export const url=new URL("../icons/S/spatial_speaker.svg?v=dc1439c28d10102b65012be189cb16da37fa39fcb9cbb61cb41fa25d6993478a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
