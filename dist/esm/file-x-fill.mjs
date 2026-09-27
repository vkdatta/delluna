export const name="file-x-fill";
export const id="dl_e66a773ad8de4063beb6";
export const url=new URL("../icons/file-x-fill.svg?v=90651b181a7ea771dac5c3d24472e40674119e0d5b18161d27296bc157da395b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
