export const name="align-center-vertical-fill";
export const id="dl_21975b96456640fe946a";
export const url=new URL("../icons/align-center-vertical-fill.svg?v=ef06d5dddd72b6156366c622216e9ed0c5a98f81f3ed2129133eb40e46787124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
