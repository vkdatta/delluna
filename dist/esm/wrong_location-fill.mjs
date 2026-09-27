export const name="wrong_location-fill";
export const id="dl_f9dbf73a3bf67c3ad909";
export const url=new URL("../icons/wrong_location-fill.svg?v=a0bfd1fe330c6c363daa0d72659de7b84c98cfdfec9d0966ea3ebfea4f66b69f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
