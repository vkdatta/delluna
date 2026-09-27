export const name="dual_screen-fill";
export const id="dl_0afc1db76a451b858b86";
export const url=new URL("../icons/dual_screen-fill.svg?v=c7c676cf311d2c41e941d96b5f535f263793aa0875515c106514eeb99c0f463d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
