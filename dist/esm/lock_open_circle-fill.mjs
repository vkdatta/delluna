export const name="lock_open_circle-fill";
export const id="dl_899335a52e4470db2e22";
export const url=new URL("../icons/lock_open_circle-fill.svg?v=056b72c1b374147341664087c483638836cb2dce15641d034d1b281445cf55fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
