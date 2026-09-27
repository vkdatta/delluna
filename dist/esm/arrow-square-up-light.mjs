export const name="arrow-square-up-light";
export const id="dl_f22c8105c7e64c0db1c4";
export const url=new URL("../icons/arrow-square-up-light.svg?v=9cee62b7ce9fed189b57fc20852fff9fe5eb9a4d2c8107d546a35adbbde8fb92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
