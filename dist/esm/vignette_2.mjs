export const name="vignette_2";
export const id="dl_36c393648ae8cf3b609f";
export const url=new URL("../icons/vignette_2.svg?v=54cca37622f392eda21be374583ac7e262f51f6e178d056e6e5af13b434ded35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
