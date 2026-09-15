export const name="cardio_load";
export const id="dl_d235a45ab3774dafa02a";
export const url=new URL("../icons/C/cardio_load.svg?v=96866790f56247cc23d8aa0452296632ca97922e505723c2df59c941f54ebc03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
