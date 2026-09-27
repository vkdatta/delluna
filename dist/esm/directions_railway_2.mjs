export const name="directions_railway_2";
export const id="dl_97f8b503cf945d258376";
export const url=new URL("../icons/directions_railway_2.svg?v=8edbb892fe34137c67e4c7c740d75b60983516a7b2531085abd975cf0f1480a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
