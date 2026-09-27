export const name="cast_for_education";
export const id="dl_295d6a247b20d2b60984";
export const url=new URL("../icons/cast_for_education.svg?v=062d91a9f71da87028d02b5dac8087b77f9424cb3936b1dccf0f7e3d8c7b363b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
