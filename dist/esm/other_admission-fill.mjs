export const name="other_admission-fill";
export const id="dl_4bf7d6aa88612b46e6b3";
export const url=new URL("../icons/other_admission-fill.svg?v=55bd58c4ce3799c1d5c9f95c5389dd8cc6f09a5514c722551c7325fed430de35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
