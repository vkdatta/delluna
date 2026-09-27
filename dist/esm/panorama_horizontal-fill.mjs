export const name="panorama_horizontal-fill";
export const id="dl_4d88cd168ddde94de861";
export const url=new URL("../icons/panorama_horizontal-fill.svg?v=723c60dc580f2b6c2e58b6d1c7be75a48546bbe2b9501812447289dbb179e2d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
