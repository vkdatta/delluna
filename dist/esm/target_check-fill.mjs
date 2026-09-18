export const name="target_check-fill";
export const id="dl_a586306f858d4bdebe09";
export const url=new URL("../icons/T/target_check-fill.svg?v=d7c716a3a43726990b85554354d188ad2447ef98631e94f1a8901e33f2a7d236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
