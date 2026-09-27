export const name="20mp-fill";
export const id="dl_f835b378358884180c2d";
export const url=new URL("../icons/20mp-fill.svg?v=815e6e208844af3885419975ac54902ef2f48db0a4c4c28d809da470f06c3892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
