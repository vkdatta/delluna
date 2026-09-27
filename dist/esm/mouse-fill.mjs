export const name="mouse-fill";
export const id="dl_c7ea201813344709645b";
export const url=new URL("../icons/mouse-fill.svg?v=b0396ab20c329ca4d65d663c55c8aaf3aa75b0ec4766cab111daaa561cbe751a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
