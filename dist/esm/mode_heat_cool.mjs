export const name="mode_heat_cool";
export const id="dl_308e092bf41cbe744c6e";
export const url=new URL("../icons/mode_heat_cool.svg?v=3a3c745575c93a3a5d0fc2ca4c7fc052c33cf6e7b2f52f280a471e77537ad7c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
