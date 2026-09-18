export const name="travel-fill";
export const id="dl_c89fc4ed15414679935e";
export const url=new URL("../icons/T/travel-fill.svg?v=d4a15cbbe1d79405a36237b2811f0969f324ea719da5149f9f81c349e9badad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
