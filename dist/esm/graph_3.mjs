export const name="graph_3";
export const id="dl_aa530583896de1700ae8";
export const url=new URL("../icons/graph_3.svg?v=ce67154547cbbe6d9edf5dbbad704741645e11e37d4daa81cd6858275fde5b04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
