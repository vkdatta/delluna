export const name="elevation";
export const id="dl_4455466f827fc3e177fa";
export const url=new URL("../icons/elevation.svg?v=c40a87bf4aa0ac16f37fabc0d8d77bcac2ef94d7d2155e0394563aa99b9160e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
