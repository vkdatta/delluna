export const name="logo_dev-fill";
export const id="dl_4ed9846b99d924db12f9";
export const url=new URL("../icons/logo_dev-fill.svg?v=4e3c76f790299ab2bef92a2d13ff9d9ed5e1ba92b69eeeb36f4a35bca9cdcf68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
