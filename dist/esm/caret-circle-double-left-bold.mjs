export const name="caret-circle-double-left-bold";
export const id="dl_5893d34c9a914dfe9f19";
export const url=new URL("../icons/caret-circle-double-left-bold.svg?v=6013eed8a52beb4bd049fde9601f6deb27df78b2eafb5576542c647e7added09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
