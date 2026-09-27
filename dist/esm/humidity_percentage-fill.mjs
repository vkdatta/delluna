export const name="humidity_percentage-fill";
export const id="dl_51e0700003eefaaa1a55";
export const url=new URL("../icons/humidity_percentage-fill.svg?v=03eb5aa003760d1f6738987096ec00b876767fc218580b33e5ebab92711907fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
