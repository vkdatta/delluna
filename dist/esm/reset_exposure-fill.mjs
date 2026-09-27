export const name="reset_exposure-fill";
export const id="dl_8a392d39e8d6b9b83312";
export const url=new URL("../icons/reset_exposure-fill.svg?v=84f1c9b30fd37028be0dcfc244c88989006e4683f643d6fb09aa26e2014c8d9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
