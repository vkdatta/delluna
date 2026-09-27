export const name="golf-fill";
export const id="dl_f8d840d2c9a4450da0e7";
export const url=new URL("../icons/golf-fill.svg?v=545e9c875a93f49b229b193fc423270ab4cbef7fc6d13082af1399fef4aef7a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
