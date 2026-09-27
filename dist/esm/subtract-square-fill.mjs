export const name="subtract-square-fill";
export const id="dl_0a9529bdaf051550370c";
export const url=new URL("../icons/subtract-square-fill.svg?v=02aea6045af2d726c0de60a2897e1ec30703f4d24eff79ac871efddf6b3139b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
