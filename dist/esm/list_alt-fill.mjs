export const name="list_alt-fill";
export const id="dl_83db6fb4449844ad981e";
export const url=new URL("../icons/list_alt-fill.svg?v=187115600e4eab3cacdca1651174bb4dd7d245dd0ce5cf061242c482d20416bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
