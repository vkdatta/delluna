export const name="yoshoku";
export const id="dl_09a855854261b6177dd4";
export const url=new URL("../icons/yoshoku.svg?v=067036e46c3221fab8ec17c2a227df312750c747194280fcd05b2bd195521444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
