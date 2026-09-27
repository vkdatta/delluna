export const name="taxi-duotone";
export const id="dl_18ef65cf887b9a1a1d6e";
export const url=new URL("../icons/taxi-duotone.svg?v=d92a30f70aa2dcdfc34dbc5ff3794a42351007327f9139f362915e166395da56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
