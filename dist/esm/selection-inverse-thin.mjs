export const name="selection-inverse-thin";
export const id="dl_dbf499a34bb2c3525021";
export const url=new URL("../icons/selection-inverse-thin.svg?v=83b28f8b2cc04bc7c12bbc8c8ca2b44f01f4878bfacc07957b920d59bedcaebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
