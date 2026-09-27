export const name="thermometer-simple-fill";
export const id="dl_a50c179123ad7b23a756";
export const url=new URL("../icons/thermometer-simple-fill.svg?v=f6ff0d8639ee000832e032c87d30ec88c194ff1e280c98361f93a0b3efd48bec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
