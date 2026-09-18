export const name="straighten-fill";
export const id="dl_4a2cea8d0edc440ea54a";
export const url=new URL("../icons/S/straighten-fill.svg?v=f4e9c6e742a7f0fa4404ce7afe7746982ab0492be0e4d4915e532b7ac1e927dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
