export const name="chart-line-fill";
export const id="dl_12686aa0334d466097cd";
export const url=new URL("../icons/chart-line-fill.svg?v=06dbe9a1c51afedc5b13785854381e1003ddae0e52b25444257cf0f4ce8c5d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
