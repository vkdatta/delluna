export const name="cell-signal-low-bold";
export const id="dl_5a617e59c833411c97e3";
export const url=new URL("../icons/cell-signal-low-bold.svg?v=1e732d4c657eb47c549fc9a1d35ae4b3d4ce820263d06802e41964e24957c99a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
