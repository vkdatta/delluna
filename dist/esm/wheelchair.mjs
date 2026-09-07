export const name="wheelchair";
export const id="dl_7932a6d89bd64b1db0e2";
export const url=new URL("../icons/W/wheelchair.svg?v=f213d5296f1c651800e336ac30b83db3d7f8b4b5665a580adef888cb1218807a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
