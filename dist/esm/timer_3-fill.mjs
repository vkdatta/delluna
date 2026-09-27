export const name="timer_3-fill";
export const id="dl_d0e20ce9269b42a07185";
export const url=new URL("../icons/timer_3-fill.svg?v=d86e4be56dbf82457f961345dcf39be33016f1541568fa933abe94c14b6e94c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
