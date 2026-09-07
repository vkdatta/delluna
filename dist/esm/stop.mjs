export const name="stop";
export const id="dl_a086da42d1954dff8511";
export const url=new URL("../icons/S/stop.svg?v=90c8296c46c18d913784d0c3d6c66bbbfcf536b161a0387659d65dc2548ba623",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
