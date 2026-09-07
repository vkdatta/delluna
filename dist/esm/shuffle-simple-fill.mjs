export const name="shuffle-simple-fill";
export const id="dl_b1ac364c708746a6a386";
export const url=new URL("../icons/S/shuffle-simple-fill.svg?v=d7332e81179322e297491d27350b6b4809642fc29ae53484b0540f7101ffd2b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
