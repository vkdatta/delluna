export const name="door_open";
export const id="dl_a638948251cfee013cd0";
export const url=new URL("../icons/door_open.svg?v=ddcdd3b620004a0140e1ab7c675069c68218bf0d82396a68a0f8420570b18b3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
