export const name="hammer-bold";
export const id="dl_959605dff1e14bc49c68";
export const url=new URL("../icons/hammer-bold.svg?v=79d2c3e9fa1f12762b6496ab1691c32f49b3c89185dde0bc9cd859adb2d19a01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
