export const name="onigiri-fill";
export const id="dl_156cd9c5b1f449a98f56";
export const url=new URL("../icons/onigiri-fill.svg?v=1ab830e1c30c52f58aab68c993d3f150488479e29fe1057c50a34fdcf97d5e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
