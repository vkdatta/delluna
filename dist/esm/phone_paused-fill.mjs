export const name="phone_paused-fill";
export const id="dl_57634af51168cb6f5914";
export const url=new URL("../icons/phone_paused-fill.svg?v=b71e3137376a78c445c95dfa91610bc2a784c6f271bdb85929f7eb2021d45a18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
