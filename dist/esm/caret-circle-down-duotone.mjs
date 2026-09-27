export const name="caret-circle-down-duotone";
export const id="dl_7a959baaabc644f79d54";
export const url=new URL("../icons/caret-circle-down-duotone.svg?v=36745158bd4fc56a9d829ec595ff319168f330135598bbca7735b3d93887710d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
