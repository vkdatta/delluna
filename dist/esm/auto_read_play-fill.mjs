export const name="auto_read_play-fill";
export const id="dl_f8eee533f3054c6cba57";
export const url=new URL("../icons/auto_read_play-fill.svg?v=dd4a9c75adaed6f90d2612c221f65c5cd8de1705355019887e1148da6766998a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
