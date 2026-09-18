export const name="mobile_arrow_down-fill";
export const id="dl_6e4da39f6777416281e6";
export const url=new URL("../icons/mobile_arrow_down-fill.svg?v=7cd9d4f91b208f8e763d2325f408059747e83377af2cb79d9b588da00d32ad85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
