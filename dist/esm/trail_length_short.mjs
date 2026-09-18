export const name="trail_length_short";
export const id="dl_c2198f6dd6ac4fa39828";
export const url=new URL("../icons/T/trail_length_short.svg?v=088a344605e47b351f38197f551f3769cad928fd33293aa512e8b52075c8e7ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
