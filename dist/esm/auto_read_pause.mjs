export const name="auto_read_pause";
export const id="dl_7d3c11b12d193e5929fb";
export const url=new URL("../icons/auto_read_pause.svg?v=701433c6197e4a171ab5b90dd20a797dae97346c423fec6b58287e4c87711490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
