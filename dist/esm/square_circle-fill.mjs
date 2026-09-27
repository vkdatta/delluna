export const name="square_circle-fill";
export const id="dl_91f242f00c282ec79d9e";
export const url=new URL("../icons/square_circle-fill.svg?v=f32979ab56bfd5493da7ba0420cc90bf145d5cfcbdd8426da6c2293f319c1dbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
