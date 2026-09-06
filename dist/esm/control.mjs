export const name="control";
export const id="dl_c78fcf0510fa46d4a380";
export const url=new URL("../icons/control.svg?v=f93e9f6ee4df21646d8122a76de15d0889d64a50055f414b117de399f1e98c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
