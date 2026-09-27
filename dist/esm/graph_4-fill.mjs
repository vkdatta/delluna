export const name="graph_4-fill";
export const id="dl_94f3d780c6e7323e3a68";
export const url=new URL("../icons/graph_4-fill.svg?v=c982bc58e661dcc91a3351be59a20183addc880ba9c1319d3782d349724547e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
