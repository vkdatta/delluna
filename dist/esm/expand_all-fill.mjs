export const name="expand_all-fill";
export const id="dl_11fad9ab58f18404ed02";
export const url=new URL("../icons/expand_all-fill.svg?v=d9adbc7b99d634df4c1fd3f2efaf7ea36871b60ac37d829b0d426e2b6b69c69f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
