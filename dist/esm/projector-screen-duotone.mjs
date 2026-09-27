export const name="projector-screen-duotone";
export const id="dl_51900455b1414f6fb467";
export const url=new URL("../icons/projector-screen-duotone.svg?v=535fc281eca8f903e555d24864f9e172f737baa74a5f24cb513018595023df3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
