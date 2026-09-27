export const name="mobile_arrow_down";
export const id="dl_39e2810f3638f7a9418a";
export const url=new URL("../icons/mobile_arrow_down.svg?v=34b355114a9b0016b5b612e4b38b66fd4e4860c1869b1c925addfa94b010663e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
