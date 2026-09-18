export const name="exposure_plus_2-fill";
export const id="dl_dfa2453e31b04ff4bb3f";
export const url=new URL("../icons/exposure_plus_2-fill.svg?v=09362f8a2fa4a040f93f34e62c324d131d1d7b5f62e570cb9978b89fbccf8082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
