export const name="node";
export const id="dl_6f2421a552c3431c871d";
export const url=new URL("../icons/node.svg?v=22cd978906c411a95ba072c501895ba931712ea3e55a7e5404cc25b038c3d77c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
