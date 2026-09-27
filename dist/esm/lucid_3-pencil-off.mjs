export const name="lucid_3-pencil-off";
export const id="dl_030ef307d1694b44a497";
export const url=new URL("../icons/lucid_3-pencil-off.svg?v=96906adbbf91e8d50ad327e26243ef5f9cd0a4221cfd661fe3631f82fa7e9e72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
