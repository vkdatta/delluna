export const name="r_mobiledata-fill";
export const id="dl_8371af87657dacd61443";
export const url=new URL("../icons/r_mobiledata-fill.svg?v=471b85631569ae5fa7e4260293a92733cb06152e056b359b7ad99062c3be078d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
