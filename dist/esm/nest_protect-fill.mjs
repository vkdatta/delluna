export const name="nest_protect-fill";
export const id="dl_be1c90217a570d50d55d";
export const url=new URL("../icons/nest_protect-fill.svg?v=4645b992f44d7154b158b4f84f0bd9cb80ee77bb65317f988ce6a26db1c64ff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
