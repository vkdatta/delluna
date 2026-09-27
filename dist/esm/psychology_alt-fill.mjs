export const name="psychology_alt-fill";
export const id="dl_febbbfd4d2f98adc6eff";
export const url=new URL("../icons/psychology_alt-fill.svg?v=d099b80fa53e98e6f905c3f8833aaa36ba14de260cbf74509e17fcd485a92346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
