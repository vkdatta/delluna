export const name="line_start_diamond";
export const id="dl_ec3dbb9482744c80853d";
export const url=new URL("../icons/line_start_diamond.svg?v=b8af379588c001c4da6ecd481c97e3827408881823183677723148c925c5776d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
