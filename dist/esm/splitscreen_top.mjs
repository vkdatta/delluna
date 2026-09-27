export const name="splitscreen_top";
export const id="dl_ac0e54bcd3fbdeef27c0";
export const url=new URL("../icons/splitscreen_top.svg?v=220178d3d131056c8399358e67e6888a462ef8c939fcddc3869f9891d327352c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
