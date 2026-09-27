export const name="lucid_3-server-off";
export const id="dl_fef5953dddb3465d8c13";
export const url=new URL("../icons/lucid_3-server-off.svg?v=840714c70cfb915749c8e9bca6c403a85fc5504713af9c45b5465e5f9eb727f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
