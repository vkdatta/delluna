export const name="airline_stops-fill";
export const id="dl_e83fb5768457e3308159";
export const url=new URL("../icons/airline_stops-fill.svg?v=d8e135ddfae33442ce05c7a7ac16bad7c91c3b027995241cde4a47792d78459d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
