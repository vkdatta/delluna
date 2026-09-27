export const name="brush";
export const id="dl_581363d10818d4146b17";
export const url=new URL("../icons/brush.svg?v=777a66cf26e5026436e8177cae138d13963947136115f17ff9578b67310b04af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
