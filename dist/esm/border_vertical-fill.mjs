export const name="border_vertical-fill";
export const id="dl_f70e4038e8f986a5cf5c";
export const url=new URL("../icons/border_vertical-fill.svg?v=bc167c96313451f4b003294a5a0c29749f58abce806895b7b792b197d4b4e7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
