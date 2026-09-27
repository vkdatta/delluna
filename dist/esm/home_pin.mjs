export const name="home_pin";
export const id="dl_04a6228ca032f0152783";
export const url=new URL("../icons/home_pin.svg?v=070ee4682f71138866717ad491c28bf7e1cd4ec4ab9312462c66caa4b541827a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
