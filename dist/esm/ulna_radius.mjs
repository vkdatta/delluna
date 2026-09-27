export const name="ulna_radius";
export const id="dl_b329b585affa80d1c8cd";
export const url=new URL("../icons/ulna_radius.svg?v=4175d1fce4dedb51bb020d57fa9756e650f40b05d3b98415389540a4769c684c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
