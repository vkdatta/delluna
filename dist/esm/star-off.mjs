export const name="star-off";
export const id="dl_eb53fbd9c0d1450385d8";
export const url=new URL("../icons/star-off.svg?v=82e8b9313200d2742a2b217df0f78953a545e130328596521db14a6370823e8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
