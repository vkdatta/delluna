export const name="pedal_bike";
export const id="dl_c23a6bf5a318ff0f73b9";
export const url=new URL("../icons/pedal_bike.svg?v=f0e2a2d4c6a6721dbe16461026a8061ab8d77232ff4fb7cde7eecc96fdf88072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
