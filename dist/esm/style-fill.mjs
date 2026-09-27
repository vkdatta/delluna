export const name="style-fill";
export const id="dl_f62593c258cec035e90b";
export const url=new URL("../icons/style-fill.svg?v=01cffd17bed8bd9494e1bba460b710b84955a413e4e89ce0bf14e1fde921538c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
