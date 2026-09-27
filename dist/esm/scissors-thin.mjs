export const name="scissors-thin";
export const id="dl_07a11ff81b4c053673bb";
export const url=new URL("../icons/scissors-thin.svg?v=bd68a52255864520d168ee99e0a423ce6014550e32486f8d91f3d889844b5c91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
