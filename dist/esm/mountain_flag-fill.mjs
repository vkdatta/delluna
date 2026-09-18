export const name="mountain_flag-fill";
export const id="dl_d95fd8cb38d04ecaaa84";
export const url=new URL("../icons/M/mountain_flag-fill.svg?v=892233be76e7f26907263a12c6f66fcd8b83ce5ff537bb6641b14183a82e27bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
