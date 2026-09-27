export const name="indent";
export const id="dl_49fef0c7f7ca5ee440cc";
export const url=new URL("../icons/indent.svg?v=49fcb75bbf33ce9dd1b7b163abd93f50587e6000613767ef2007278e3918a105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
