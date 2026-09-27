export const name="directions_bike";
export const id="dl_cd0c290fdf81fbc1ac10";
export const url=new URL("../icons/directions_bike.svg?v=7547756c59c334b0f2cc1a5d47bf8861d4ec6f0c73bd7d66c96fb011f637f249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
