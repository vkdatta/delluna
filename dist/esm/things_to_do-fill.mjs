export const name="things_to_do-fill";
export const id="dl_a1beebef2cc70c92b3c4";
export const url=new URL("../icons/things_to_do-fill.svg?v=8884f053143d8281f47f6729a09e37fe415a659319dff2514aa2243b95fd1e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
