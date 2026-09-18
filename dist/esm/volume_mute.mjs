export const name="volume_mute";
export const id="dl_6c28a3c2c389425783b3";
export const url=new URL("../icons/V/volume_mute.svg?v=9da0a310ead680fe36b4d3306ccc4786ddc61fc191bc2c5b19a99ef5fc7b5d37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
