export const name="lucid_3-refresh-cw-off";
export const id="dl_bb9fbb1d572044d7ad33";
export const url=new URL("../icons/lucid_3-refresh-cw-off.svg?v=9bda7dcb44cf38d1a1485485be8dfccc0739803f3b57f4a4cf4eaa41ab36f231",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
