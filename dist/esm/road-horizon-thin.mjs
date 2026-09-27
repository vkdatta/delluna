export const name="road-horizon-thin";
export const id="dl_95340efe45ca4924abd3";
export const url=new URL("../icons/road-horizon-thin.svg?v=9fd5c3061fc05832b7fb72951e81cc7a42f7673a058e7a7e9c9fed643e1f0234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
