export const name="scatter_plot";
export const id="dl_1efc563e94384b70bf75";
export const url=new URL("../icons/scatter_plot.svg?v=04906811bc51b4c356a1af9fe4de3753ac024d7b3d61068368d771467d1d30f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
