export const name="stat_minus_3";
export const id="dl_9ffe6b79e73c85fb6445";
export const url=new URL("../icons/stat_minus_3.svg?v=f260d1ee236358aebca01bafcbe7feda75523d26e1b9c787b717da36c8c2ff09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
