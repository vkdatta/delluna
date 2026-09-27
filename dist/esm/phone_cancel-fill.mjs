export const name="phone_cancel-fill";
export const id="dl_7799f5e3c3db33510bb7";
export const url=new URL("../icons/phone_cancel-fill.svg?v=bf7a5a16a9cff9e6669dc860953535f18b02cf72b5576558949c343b1787d5d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
