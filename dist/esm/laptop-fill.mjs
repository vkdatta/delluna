export const name="laptop-fill";
export const id="dl_9be45dd1e46f4fb782f6";
export const url=new URL("../icons/laptop-fill.svg?v=3de1db49bbf1459df12b8cdaa3ca07051721f66b8febd4e2c8a398bf083fb170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
