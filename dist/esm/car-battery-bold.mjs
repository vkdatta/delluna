export const name="car-battery-bold";
export const id="dl_3c6fee3d6e11445bb382";
export const url=new URL("../icons/car-battery-bold.svg?v=048d24f53e993c6bc358860162ecd9f235f0c24f4ad81e9aa597c3df1c9051e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
