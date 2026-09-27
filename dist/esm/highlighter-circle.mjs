export const name="highlighter-circle";
export const id="dl_0d95b71a66d541b4b849";
export const url=new URL("../icons/highlighter-circle.svg?v=f3c854f30caa918c725637aaab2bab1996e4e466909f5120c392b30c3c3126cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
