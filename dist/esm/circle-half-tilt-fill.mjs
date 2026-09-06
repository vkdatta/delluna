export const name="circle-half-tilt-fill";
export const id="dl_c3c7ec06105b42bd9348";
export const url=new URL("../icons/circle-half-tilt-fill.svg?v=72d6828cad846a0576a4bbd1995b2049d42b42efc781a2aa4214115a1559e769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
