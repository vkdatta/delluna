export const name="border_left-fill";
export const id="dl_919eb942e55b3777e946";
export const url=new URL("../icons/border_left-fill.svg?v=9526f5dcc7e38133f4c55bded9a157db34a8bd7a43a4e23536fc6c6f2e7b797d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
