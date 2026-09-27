export const name="reset_exposure-fill";
export const id="dl_b65ba371697c2e64cac9";
export const url=new URL("../icons/reset_exposure-fill.svg?v=0bfa4c3980b656c814cb1af24c16c4e9c0333375b8910304301b95eddfc74fe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
