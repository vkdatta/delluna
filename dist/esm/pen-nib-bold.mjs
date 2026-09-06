export const name="pen-nib-bold";
export const id="dl_ae381aa517604d7483eb";
export const url=new URL("../icons/pen-nib-bold.svg?v=ed30728859a727db15c647a42a98de180761cba3857d45448072f02b83aa2375",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
