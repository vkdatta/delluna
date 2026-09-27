export const name="checkerboard-bold";
export const id="dl_a21634a2e84b4938bbd1";
export const url=new URL("../icons/checkerboard-bold.svg?v=5cc8bda8c9c314554b52ecf256ebbf1d140f70df875743ef504659ab3629234a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
