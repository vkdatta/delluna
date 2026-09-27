export const name="roller_shades_closed-fill";
export const id="dl_3976b847b0cb1b350e9c";
export const url=new URL("../icons/roller_shades_closed-fill.svg?v=aa89cec1e4a5e7af2c73a797f3fae400a56f067f7c0f15a83e6a23dccc7e4fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
