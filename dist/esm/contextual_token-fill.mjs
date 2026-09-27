export const name="contextual_token-fill";
export const id="dl_14626778f23697d536f7";
export const url=new URL("../icons/contextual_token-fill.svg?v=60b2ea5c9d41354733a24efed19ed69f2106694a2526a300c89b5a7c913bcba0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
