export const name="cell-signal-low-bold";
export const id="dl_5a617e59c833411c97e3";
export const url=new URL("../icons/cell-signal-low-bold.svg?v=f121a5c377d5eb50bbd4b09fe9765d9cef16a13c112857730f19dfe5343705a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
