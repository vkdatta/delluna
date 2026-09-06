export const name="lego-fill";
export const id="dl_ee545a3f01fd40ec88ee";
export const url=new URL("../icons/lego-fill.svg?v=9fc58496380696761635fca3ff49154c30685c679b1c48b84caf729035763ee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
