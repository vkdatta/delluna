export const name="grains-fill";
export const id="dl_d991aeb7f5264225a147";
export const url=new URL("../icons/grains-fill.svg?v=86b2cb0c9c99062b906043c1f294dc873d7ff6f2e52b65916ab47ec9e4dd0e70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
