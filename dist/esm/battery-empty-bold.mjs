export const name="battery-empty-bold";
export const id="dl_8804b188b5e246a7aa3e";
export const url=new URL("../icons/battery-empty-bold.svg?v=f7703a620c0e5e5241dc343d41499a7ee3586a4394bf02536de806583b033598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
