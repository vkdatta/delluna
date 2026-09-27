export const name="dot-outline-duotone";
export const id="dl_fc29e9556bdf425fbed6";
export const url=new URL("../icons/dot-outline-duotone.svg?v=801427960f89341dedd79690bf74d838a722acb8dbc7c779b6f3f244dfda4f7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
