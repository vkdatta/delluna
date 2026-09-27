export const name="u_turn_right-fill";
export const id="dl_7f06ca3006cab7c48515";
export const url=new URL("../icons/u_turn_right-fill.svg?v=dc10988490e92a1a454f43247f3500b301c66df4b65a9e2a80c6bb0326f03f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
