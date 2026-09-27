export const name="drop-half-bottom-thin";
export const id="dl_3aa6077e0a2f4850b9c6";
export const url=new URL("../icons/drop-half-bottom-thin.svg?v=2afce15f245a5335e20e0e10354139a693c291dd7ea76f45d08e0cc23a116dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
