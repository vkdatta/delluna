export const name="file-csv";
export const id="dl_641cce62160c413d920a";
export const url=new URL("../icons/file-csv.svg?v=457c3d94fb54f81a43a98f9085a8eb665ef494e760cc83555905108bea9783d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
