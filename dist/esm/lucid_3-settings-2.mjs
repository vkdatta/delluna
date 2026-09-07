export const name="lucid_3-settings-2";
export const id="dl_261e8ca4d8694f8b9520";
export const url=new URL("../icons/lucid_3-settings-2.svg?v=81bbe5dca1b324dddb4f98bf430507deb713123fa864f1d3d2e90dcb2438798f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
