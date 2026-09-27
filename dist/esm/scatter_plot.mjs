export const name="scatter_plot";
export const id="dl_8e8b947b1caf7f1eef19";
export const url=new URL("../icons/scatter_plot.svg?v=01d52fcff5f2a536de5f95ba96fca4876cf1c462d840ce388c77875de1f22809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
