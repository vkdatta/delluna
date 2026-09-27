export const name="virtual-reality-fill";
export const id="dl_310a682777d6af5e639d";
export const url=new URL("../icons/virtual-reality-fill.svg?v=73e299ea3452d46f41147cc84e978fe9405225a5b02eb23c46bb3e5fbc77947d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
