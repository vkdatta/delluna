export const name="bedtime_off-fill";
export const id="dl_d262b230b11842048b18";
export const url=new URL("../icons/bedtime_off-fill.svg?v=51cffedd12c082dd7e9edc16111b816084f59993e1d0dee0979412137b0434d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
