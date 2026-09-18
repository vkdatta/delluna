export const name="insert_chart-fill";
export const id="dl_2cc8adac4c784c0ea197";
export const url=new URL("../icons/I/insert_chart-fill.svg?v=056b16d046c0512b1f35f03a128d793a4a0d78381ab03dce1d5575da9f573f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
