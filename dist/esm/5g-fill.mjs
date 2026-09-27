export const name="5g-fill";
export const id="dl_c97076dc9dcc68714487";
export const url=new URL("../icons/5g-fill.svg?v=5126300a5ca653e19339c2b9d0ab4884f25fe6e031ec8b6c97d90407444256c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
