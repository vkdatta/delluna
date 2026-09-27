export const name="smiley-meh";
export const id="dl_12b8792d4479a235eb73";
export const url=new URL("../icons/smiley-meh.svg?v=2681f43af3447b064a1f0adcb3195d2c1638087405b6c54174ad7f4a3f8bc440",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
