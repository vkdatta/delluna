export const name="bus_railway-fill";
export const id="dl_3efa8ce10d2b42feaa55";
export const url=new URL("../icons/bus_railway-fill.svg?v=4e7c623792c13cf0bcb2dc9ccb9f043fc70e5ac3f7def3e8da324dadd730cbd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
