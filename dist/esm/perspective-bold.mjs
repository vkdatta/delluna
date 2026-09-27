export const name="perspective-bold";
export const id="dl_857d46caab824aff8f56";
export const url=new URL("../icons/perspective-bold.svg?v=df80f2f70660303e97e47afb041a860575c4c9d8921c9fb7a22eef03864726dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
