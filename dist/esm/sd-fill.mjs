export const name="sd-fill";
export const id="dl_5341b8bf01d44bff8456";
export const url=new URL("../icons/sd-fill.svg?v=8dafe5fda824daf75fc7cc1bab051c184cfa9c6d16d6f47a301f8d22561cb1a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
