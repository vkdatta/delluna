export const name="intersection-bold";
export const id="dl_d9e1902936534bc28603";
export const url=new URL("../icons/intersection-bold.svg?v=fd7b1e7410f78e19427bfdb23ab165caead0642c7ce72b722cf570dae704be5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
