export const name="laptop-duotone";
export const id="dl_5fea16139b95480bafad";
export const url=new URL("../icons/laptop-duotone.svg?v=1686b2cc5c2ad9b2b56215b167b6890bf731c91fa5dbe34425416f510d219da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
