export const name="arrow_cool_down";
export const id="dl_eda6e087f1d679cbfbd1";
export const url=new URL("../icons/arrow_cool_down.svg?v=0923cc7b152e41644cfb28db122beb23219e5939dc9d0b75dc0c595ff7bcd790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
