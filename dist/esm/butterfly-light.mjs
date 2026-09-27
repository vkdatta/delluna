export const name="butterfly-light";
export const id="dl_6475e7df7a694ab8bf03";
export const url=new URL("../icons/butterfly-light.svg?v=024de86cc0fdef750f66bc482fa27bc08f6e3c3732b381ecc874acbb1cfa9336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
