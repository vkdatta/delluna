export const name="pie_chart";
export const id="dl_32fd1efabef3d91d857f";
export const url=new URL("../icons/pie_chart.svg?v=f8df901ac719d032f4cf29b77f62777aaee75009c34af9cd665de85acec69c85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
