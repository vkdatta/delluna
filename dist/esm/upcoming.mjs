export const name="upcoming";
export const id="dl_f222b6449a7884c1586c";
export const url=new URL("../icons/upcoming.svg?v=f5219782176a488b2c291ca42e4c826486aaa9f228e439711f404a76ec767d55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
