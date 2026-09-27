export const name="divide-fill";
export const id="dl_486fc7831a7141a696c2";
export const url=new URL("../icons/divide-fill.svg?v=7fc351e33f17378e2ab175dd7eb236276f9e514b5a87bd9f43046ee199dceef6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
