export const name="flowchart";
export const id="dl_78aecd2bbb714ba3b41a";
export const url=new URL("../icons/flowchart.svg?v=f243ead691855f051456e806ad7e741264fca7707591f805d5358fb67611e6e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
