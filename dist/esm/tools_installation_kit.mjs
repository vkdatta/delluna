export const name="tools_installation_kit";
export const id="dl_ed27bc53196e5c091b33";
export const url=new URL("../icons/tools_installation_kit.svg?v=f55897fb1cbca2316214c99c5f15c4b9a62330aa5dff6e9e59fce7f769a03058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
