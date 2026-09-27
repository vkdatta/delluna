export const name="arrow-square-in-thin";
export const id="dl_a220c071531941fbaefc";
export const url=new URL("../icons/arrow-square-in-thin.svg?v=8b61e02a1784b47d43a247048c733c43b2ee4e7b83f46c2b0dedae7d503393dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
