export const name="soup_kitchen-fill";
export const id="dl_3238d243694699e54b77";
export const url=new URL("../icons/soup_kitchen-fill.svg?v=8ac6655225c95d89c64b0f07f06574bacce2514df7f74ee52b6c5b3e3029ffec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
