export const name="square-radical";
export const id="dl_737d4a35d61c45faaff5";
export const url=new URL("../icons/square-radical.svg?v=b7d3c07952242e2a13232f76828cfa203f648f671796bee5871e4e42eda5ddfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
