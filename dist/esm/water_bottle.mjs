export const name="water_bottle";
export const id="dl_c0308483dcbf460daab2";
export const url=new URL("../icons/W/water_bottle.svg?v=df2071615f7e17ceb63d543ef65e40cfb66048e467f4257740714dd0e70fb18c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
