export const name="arrow-square-up-left-thin";
export const id="dl_d721aa467a244f089e1a";
export const url=new URL("../icons/arrow-square-up-left-thin.svg?v=126de1c7aa6194579402d35b66d7ffef34eeff18b587ffc0d9a085441d8ea573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
