export const name="fire-extinguisher-bold";
export const id="dl_632caf699e134577b6be";
export const url=new URL("../icons/fire-extinguisher-bold.svg?v=37f98c4a6708ce20629ebba076ae1c1d1247ece6579cc1f098d2e680f3d6919d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
