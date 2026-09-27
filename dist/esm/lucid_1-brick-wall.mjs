export const name="lucid_1-brick-wall";
export const id="dl_e740df8cfe7841e7ae46";
export const url=new URL("../icons/lucid_1-brick-wall.svg?v=94bda30f4d33f3036e78ff49f7cddf66a5b47c12b4b3165bd23d6b5e622eddbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
