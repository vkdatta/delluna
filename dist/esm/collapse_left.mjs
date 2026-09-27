export const name="collapse_left";
export const id="dl_47cb40a90d3276b72f0b";
export const url=new URL("../icons/collapse_left.svg?v=02b5fa40f0a01d44e610498efc10fc4fee649f51a9915bc48a8c044d0219046f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
